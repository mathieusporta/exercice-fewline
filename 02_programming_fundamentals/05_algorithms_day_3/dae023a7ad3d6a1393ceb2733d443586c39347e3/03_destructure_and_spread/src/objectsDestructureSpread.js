function getConfig(config = {}) {
  const defaultConfig = {
    user: {
      name: "root",
      password: "admin",
    },
    hardware: {
      CPUThreads: 4,
      memory: 2,
      diskSpace: 20,
    },
  };
  const result = {
    user: { ...defaultConfig.user, ...config.user },
    hardware: { ...defaultConfig.hardware, ...config.hardware },
  };
  return result;
}
console.log(getConfig());
function logInfos(user) {
  const redactedUser = {
    firstName: "<REDACTED>",
    lastName: "<REDACTED>",
    address: {
      city: "<REDACTED>",
      country: "<REDACTED>",
    },
  };
  let {
    firstName = "John",
    lastName = "Rambo",
    address = { city = "Hope", country = "Canada"},
  } = user; 

  const result = {
    user: { ...redactUser, ...logInfos },
    hardware: { ...redactUser.hardware, ...logInfos.hardware },


    };

  console.log(`${firstName} ${lastName} lives in ${city}, ${country}.`);
}
module.exports = {
  getConfig,
  logInfos,
};