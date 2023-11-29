const isMozilla =
  window?.navigator?.userAgent?.toString().toLowerCase().includes('chrome') ?? false;
for (let index = 0; index < urls.length; index++) {
  const url = isMozilla ? urls.reverse()[index] : urls[index];
  window.open(url, "_blank");
}
