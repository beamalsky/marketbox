import "util";
import numeral from "numeral";
import React, { useMemo, useState, useEffect } from "react";
import Slider from "./slider";
import Statement from "./statement";
import Text from "./text";
import Prism from "prismjs";
import { navigate } from '@reach/router'
import queryString from "query-string"

import "./source.css";
import "./section.css";

const template = Prism.languages.javascript["template-string"].inside;

Prism.languages.account = {
  ...template,
  interpolation: {
    ...template.interpolation,
    pattern: /((?:^|[^\\])(?:\\{2})*){(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
  },
}

function dictionaryToQueryString (dict) {
  var querystring = '?'

  Object.keys(dict).forEach(function(key, i) {
    var q = key + '=' + dict[key].toString()
    if (i == 0) {
      querystring += q
    } else {
      querystring += '&' + q
    }
    return(i)
    return(querystring)
  })

  return querystring
}

function Section({ ast, astState, page, rawText, location }) {
  const [viewSource, setViewSource] = useState();
  const searchParams = queryString.parse(location.search)
  const state = useMemo(readFields, [astState, searchParams]);


  function addField(k, v) {
    state[k] = v
    const path = dictionaryToQueryString(state)
    navigate(path)
    return v
  }

  function readFields() {
    return Object.fromEntries(
      Object.keys(astState).map((k) => {
        return [k, searchParams[k] || astState[k]];
      })
    );
  }

  function toComponents(o, i) {
    switch (o.type) {
      case "text":
        return <Text key={i} {...o} />;

      case "statement":
        return (
          <span className="full-statement" key={i}>
            <Slider
              key={o.variable}
              addField={addField}
              valueFromState={state[o.variable]}
              i={i}
              {...o}
            />
            <Statement valueFromState={state[o.variable]} i={i} {...o} />
          </span>
        );

      case "expression":
        function format(n) {
          const num = numeral(n);
          if (n < 10 && n > -10) {
            return num.format("0.00");
          }
          return num.format("-0,0");
        }
        function evaluate(o) {
          const n = o.eval(state);
          state[o.variable] = n;
          return n;
        }
        const n = evaluate(o);
        const sign = n > 0 ? "positive" : "negative";
        return (
          <span className={"expression " + sign} key={i}>
            {format(n)}
          </span>
        );

      default:
        return undefined;
    }
  }

  useEffect(() => {
    setViewSource(false);
  }, [page]);

  useEffect(() => {
    if (viewSource) {
      Prism.highlightAll();
    }
  }, [viewSource]);

  return (
    <div id="text">
      {ast.map(toComponents)}
    </div>
  );
}

export default Section;
