const dns = require("dns");

dns.resolveSrv(
  "_mongodb._tcp.shopnest-cluster.1y5dvxr.mongodb.net",
  (err, addresses) => {
    if (err) {
      console.error("DNS Error:");
      console.error(err);
      return;
    }

    console.log("SRV Records:");
    console.log(addresses);
  }
);