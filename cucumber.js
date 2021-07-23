// const worldParameters = {
//   baseUrl: `http://${process.env.HOST}:${process.env.PORT}/`,
// };

const common = [
  '--require-module ts-node/register',
  '--require features/**/*.ts',
  `--format progress-bar`,
  '--publish-quiet',
  // `--world-parameters '${JSON.stringify(worldParameters)}'`,
].join(' ');

const ci = [
  '--require-module ts-node/register',
  '--format html:./cucumber-report.html',
].join(' ');

module.exports = {
  default: common,
  ci,
};
