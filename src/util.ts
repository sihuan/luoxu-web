export function sleep(ms: number) {
  const p = new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
  return p;
}

export function getToken() {
  let urlSearchParams = new URLSearchParams(window.location.search);
  let token = urlSearchParams.get("token");
  return token;
}