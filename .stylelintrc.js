module.exports = {
  "plugins": [
    "stylelint-config-prettier",
    "stylelint-config-recommended",
    "stylelint-config-styled-components",
    "stylelint-processor-styled-components",
    "stylelint-order"
  ],
  extends: ["stylelint-config-styled-components"],
  processors: ["stylelint-processor-styled-components"],
  "customSyntax": "@stylelint/postcss-css-in-js",
  "rules": {
    "alpha-value-notation": "percentage",
    "color-hex-case": "upper",
    "order/order": [
      "custom-properties",
      "declarations"
    ],
    "order/properties-order": [
      {
        "groupName": "all",
        "properties": [
          "all"
        ]
      },
      {
        "groupName": "displays",
        "properties": [
          "display"
        ]
      }
    ],
    "color-named": "never"
  }
};
