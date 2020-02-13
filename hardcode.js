const generateMarkdown = profileData => {
  return `
# ${profileData.project}

## Description

#${profileData.description}

## Usages
${profileData.usage}

## Github Username
#${profileData.username}

##Github E-mail
#${profileData.email}
`;
};

module.exports = generateMarkdown;
