const MIN_RULE_VALUE = 2;
const MAX_RULE_VALUE = 100;

module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerCorrespondence: ['project-prefix', 'type', 'subject'],
    },
  },
  projectNamePattern: 'DOBROFERMA',
  rules: {
    'header-max-length': [MIN_RULE_VALUE, 'always', MAX_RULE_VALUE],
    'type-empty': [MIN_RULE_VALUE, 'never'],
    'type-enum': [MIN_RULE_VALUE, 'always', ['chore', 'docs', 'feat', 'fix', 'perf', 'refactor', 'test']],
  },
};
