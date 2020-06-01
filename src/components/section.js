import "util";
import numeral from "numeral";
import React, { useMemo } from "react";
import Slider from "./slider";
import Statement from "./statement";
import Text from "./text";
import Prism from "prismjs";

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

function Section({ ast, astState, page, rawText, vizState }) {
  const stateUpdates = vizState
  const state = useMemo(readFields, [astState, stateUpdates])

  function readFields() {
    return Object.fromEntries(
      Object.keys(astState).map((k) => {
        return [k, stateUpdates[k] || astState[k]];
      })
    )
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
              valueFromState={state[o.variable]}
              i={i}
              vizState={vizState}
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
          <span className={"expression " + sign} key={i} style={{ fontWeight: 'bold' }}>
            {format(n)}
          </span>
        );

      default:
        return undefined;
    }
  }

  return (
    <div
      id="text"
      className="my-2 mx-4 p-2"
    >
      {ast.map(toComponents)}
    </div>
  );
}

export default Section;
