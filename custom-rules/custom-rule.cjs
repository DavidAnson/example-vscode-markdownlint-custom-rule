// @ts-check

"use strict";

const blockedRe = /blocked/i;

/** @type import("markdownlint").Rule */
module.exports = {
  "names": [ "custom-rule" ],
  "description": "The word 'blocked' is blocked",
  "tags": [ "test" ],
  "parser": "none",
  "function": (params, onError) => {
    params.lines.forEach((line, index) => {
      const match = blockedRe.exec(line);
      if (match) {
        onError({
          "lineNumber": index + 1,
          "range": [ match.index + 1, match[0].length ]
        });
      }
    });
  }
};
