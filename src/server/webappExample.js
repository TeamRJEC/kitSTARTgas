export const doGetExample = () => {
  const fileName = 'webapp-example.html';
  const title = 'Webapp Example';
  return HtmlService.createHtmlOutputFromFile(fileName)
    .setTitle(title)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.DEFAULT);
};
