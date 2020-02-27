module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
      '@babel/react',
    ],
    "plugins": [
      [
        "@babel/plugin-proposal-class-properties",
        {
          "loose": true
        }
      ]
    ]
}
