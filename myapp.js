var page = new tabris.Page({
  topLevel: true,
  title: "Lotto Scan"
});
new tabris.TextView({
  layoutData: {centerX: 100, centerY: 0},
  text: "win lotto"
}).appendTo(page);
page.open();