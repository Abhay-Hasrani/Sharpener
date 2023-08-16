import { useEffect, useState } from "react";
const useFetch = (url, type = "GET", body = null) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function apicall() {
      let res = null;
      if (type === "GET" || type === "DELETE") {
        res = await fetch(url, { method: type });
      } else if (body !== null) {
        res = await fetch(url, {
          method: type,
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        throw new Error("Body cannot be null for POST ans PUT requests");
      }
      const data = await res.json();
      const ok = res.ok;
      setData([data, ok]);
    }
    apicall();
  }, [url, body, type]);

  return [...data];
};
export default useFetch;
