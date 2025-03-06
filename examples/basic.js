process.env.DEBUG = 'bedrock-portal*'

const { BedrockPortal, Joinability } = require('bedrock-portal')

const main = async () => {
  const portal = new BedrockPortal({
    ip: 'm-us-ca-la-01.wepwawet.net',
    port: 25164,
    joinability: Joinability.FriendsOfFriends,
    world: {
      hostName: 'bedrockportal',
      name: 'BedrockPortal',
      version: '1.21.20',
      memberCount: 0,
      maxMemberCount: 10000,
    },
  })

  await portal.start()

  console.log(`Portal started on ${portal.options.webRTCNetworkId} as ${portal.host.profile.gamertag}`)

}

main()
