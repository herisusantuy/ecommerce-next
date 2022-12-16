const path = require('path');
const merge = require('deepmerge');
const fs = require('fs');
const prettier = require('prettier');

const ALLOWED_FM = ['shopify', 'bigcommerce', 'shopify_local'];
const FALLBACK_FM = 'shopify';

function withFrameworkConfig(defaultConfig = {}) {
  let framework = defaultConfig?.env?.framework;

  if (!framework) {
    throw new Error(
      'The api framework is missing, please add a valid provider!'
    );
  }

  if (!ALLOWED_FM.includes(framework)) {
    throw new Error(
      `The api framework: ${framework} cannot be found, please use on of ${ALLOWED_FM.join(
        ', '
      )}`
    );
  }

  if (framework === 'shopify_local') {
    framework = FALLBACK_FM;
  }

  const frameworkNextConfig = require(path.join(
    '../',
    framework,
    'next.config'
  ));
  const config = merge(defaultConfig, frameworkNextConfig);

  const tsPath = path.join(process.cwd(), 'tsconfig.json');
  const tsConfig = require(tsPath);
  // cwd mean current working directory
  tsConfig.compilerOptions.paths['@framework'] = [`framework/${framework}`];
  tsConfig.compilerOptions.paths['@framework/*'] = [`framework/${framework}/*`];

  fs.writeFileSync(
    tsPath,
    prettier.format(JSON.stringify(tsConfig), { parser: 'json' })
  );

  return config;
}

module.exports = { withFrameworkConfig };
