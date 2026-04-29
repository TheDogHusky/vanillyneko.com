interface NavbarItem {
    label: string;
    to?: string;
    target?: string;
    type: 'link' | 'dropdown' | 'subdropdown';
    items?: NavbarItem[];
    auth?: 'authenticated' | 'unauthenticated';
    roles?: string[] | string;
    oneOfRoles?: string[];
}

export const navbarItems: NavbarItem[] = [
    {
        label: 'Home',
        to: '/',
        type: 'link'
    },
    {
        label: 'Payments',
        type: 'dropdown',
        items: [
            { label: 'Amazon Wishlist', to: 'https://www.amazon.com/hz/wishlist/ls/15EGTSWVHZJHX?ref_=wl_share', target: '_blank', type: 'link' },
            { label: 'BuyMeACoffee', to: 'https://buymeacoffee.com/vanillyneko', target: '_blank', type: 'link' },
            { label: 'Cashapp', to: 'https://cash.app/$VanillyNeko', target: '_blank', type: 'link' },
            { label: 'Gumroad', to: 'https://vanillyneko.gumroad.com/coffee', target: '_blank', type: 'link' },
            { label: 'Ko-Fi', to: 'https://ko-fi.com/vanillyneko', target: '_blank', type: 'link' },
            { label: 'LiberaPay', to: 'https://liberapay.com/vanillyneko/', target: '_blank', type: 'link' },
            { label: 'Patreon', to: 'https://patreon.com/vanillyneko?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink', target: '_blank', type: 'link' },
            { label: 'PayPal', to: 'https://www.paypal.com/paypalme/vanillynekottv', target: '_blank', type: 'link' },
            { label: 'Purchase Services/Donate (Stripe/Paypal)', to: 'https://pay.vnil.me', target: '_blank', type: 'link' },
            {
                label: 'Manage Old Stripe Donation',
                type: 'subdropdown',
                items: [
                    { label: 'Manage Stripe Billing', to: 'https://billing.stripe.com/p/login/6oE6px2Zwe6v2QwaEE', target: '_blank', type: 'link' }
                ]
            },
            { label: 'Venmo', to: 'https://venmo.com/u/VanillyNeko', target: '_blank', type: 'link' },
            { label: 'Zelle', to: '/zelle', type: 'link' }
        ]
    },
    {
        label: 'Kigu Resources',
        type: 'dropdown',
        items: [
            {
                label: 'Kigurumi Discord Servers',
                type: 'subdropdown',
                items: [
                    { label: 'Kigurumi International Group', to: 'https://discord.gg/kigurumi', target: '_blank', type: 'link' },
                    { label: 'Kigurumi Shrine', to: 'https://discord.gg/ddYWRZxnmn', target: '_blank', type: 'link' },
                    { label: "Neko Nico's Litterbox", to: 'https://discord.gg/hTq5Z5ueav', target: '_blank', type: 'link' },
                    { label: "Rumi Aida's Comfy Crew", to: 'https://discord.gg/kigurumi', target: '_blank', type: 'link' },
                    { label: 'The Animegao Circle', to: 'https://discord.com/invite/p2u7xPN', target: '_blank', type: 'link' }
                ]
            },
            {
                label: 'Kigu Sites/Resources/Creators',
                type: 'subdropdown',
                items: [
                    {
                        label: 'Alice Kig Garden',
                        type: 'subdropdown',
                        items: [
                            { label: 'Alice Kig Garden (Amazon)', to: 'https://www.amazon.com/shops/alicekiggarden', target: '_blank', type: 'link' },
                            { label: 'AliceKigGarden (Email)', to: 'mailto:alicekiggarden@gmail.com', target: '_blank', type: 'link' },
                            { label: 'AliceKigGarden (Facebook)', to: 'https://www.facebook.com/jiang.xinyu.545/', target: '_blank', type: 'link' }
                        ]
                    },
                    { label: 'Black Cat Kig (Maker)', to: 'https://blackcatkig.com/', target: '_blank', type: 'link' },
                    { label: 'DameKigu (Maker)', to: 'https://damekigurumi.com/Home', target: '_blank', type: 'link' },
                    { label: 'JSensei (Creator)', to: 'https://www.etsy.com/shop/KigurumiSenseiStore', target: '_blank', type: 'link' },
                    { label: 'Kig Fever Club (Maker)', to: 'https://kigfeverclub.com/', target: '_blank', type: 'link' },
                    { label: 'Kig Guide (Info)', to: 'https://kigguide.com/', target: '_blank', type: 'link' },
                    { label: 'Kig Land (Maker)', to: 'https://kig.land/', target: '_blank', type: 'link' },
                    { label: 'Kig Wiki (Community Resources)', to: 'https://kig.wiki/', target: '_blank', type: 'link' }
                ]
            },
            {
                label: 'KiguLove Peeps',
                type: 'subdropdown',
                items: [
                    { label: 'NovaKig (Xivosesian)', to: 'https://novakig.kiglove.moe', target: '_blank', type: 'link' }
                ]
            }
        ]
    },
    {
        label: 'Socials',
        type: 'dropdown',
        items: [
            { label: 'Bluesky', to: 'https://bsky.app/profile/vanillyneko.bsky.social', target: '_blank', type: 'link' },
            { label: 'Disboard', to: 'https://disboard.org/server/883395034739773510', target: '_blank', type: 'link' },
            { label: 'Discord Server', to: 'https://discord.com/invite/6vQUZ4Q4YT', target: '_blank', type: 'link' },
            { label: 'Facebook (Personal)', to: 'https://www.facebook.com/ellie.lane.399488/', target: '_blank', type: 'link' },
            { label: 'Facebook Page', to: 'https://www.facebook.com/vanillyneko', target: '_blank', type: 'link' },
            { label: 'Giphy', to: 'https://giphy.com/channel/vanillyneko', target: '_blank', type: 'link' },
            { label: 'GitHub (organization)', to: 'https://github.com/VanillyNeko', target: '_blank', type: 'link' },
            { label: 'Github (personal)', to: 'https://github.com/arty01238', target: '_blank', type: 'link' },
            { label: 'Google Search', to: 'https://www.google.com/search?q=VanillyNeko', target: '_blank', type: 'link' },
            { label: 'Instagram', to: 'https://www.instagram.com/vanillyneko/', target: '_blank', type: 'link' },
            { label: 'History', to: 'https://www.facebook.com/vanillyneko', target: '_blank', type: 'link' },
            { label: 'MyAnimeList', to: 'https://myanimelist.net/profile/VanillyNeko', target: '_blank', type: 'link' },
            { label: 'Slack', to: 'https://vanillyneko.slack.com', target: '_blank', type: 'link' },
            { label: 'Snapchat', to: 'https://www.snapchat.com/@vanillyneko', target: '_blank', type: 'link' },
            { label: 'Spotify', to: 'https://open.spotify.com/user/alrider01226', target: '_blank', type: 'link' },
            { label: 'Steam', to: 'https://steamcommunity.com/id/VanillyNeko/', target: '_blank', type: 'link' },
            { label: 'Tenor', to: 'https://tenor.com/users/vanillyneko', target: '_blank', type: 'link' },
            { label: 'Tiktok', to: 'https://www.tiktok.com/@vanillyneko', target: '_blank', type: 'link' },
            { label: 'Twitch', to: 'https://www.twitch.tv/vanillyneko', target: '_blank', type: 'link' },
            { label: 'Twitter/X', to: 'https://x.com/vanillyneko', target: '_blank', type: 'link' },
            { label: 'VRChat', to: 'https://vrchat.com/home/user/usr_79f2acb3-46b6-4a0d-a54f-af8211b16188', target: '_blank', type: 'link' },
            { label: 'YouTube', to: 'https://www.youtube.com/@vanillyneko', target: '_blank', type: 'link' }
        ]
    },
    {
        label: 'Services',
        type: 'dropdown',
        items: [
            {
                label: 'AI Services',
                type: 'subdropdown',
                items: [
                    { label: 'Free Chatbot (Down)', to: 'https://yuna.vnil.cc/', target: '_blank', type: 'link' }
                ]
            },
            {
                label: 'Client Services',
                type: 'subdropdown',
                items: [
                    { label: 'Game Panel', to: 'https://miku.vnil.me/', target: '_blank', type: 'link' },
                    { label: 'IRC Client', to: 'https://nanako.vnil.me/', target: '_blank', type: 'link' }
                ]
            },
            { label: 'Discord Themes', to: '/discord-themes', type: 'link' },
            {
                label: 'File Sharing Services',
                type: 'subdropdown',
                items: [
                    { label: 'Public Chibisafe File Share Service', to: 'https://vnil.me/', target: '_blank', type: 'link' }
                ]
            },
            {
                label: 'Media',
                type: 'subdropdown',
                items: [
                    { label: 'Requests (Jelly)', to: 'https://yuki.vnil.me', target: '_blank', type: 'link' },
                    { label: 'Plex (watch)', to: 'https://app.plex.tv/', target: '_blank', type: 'link' },
                    { label: 'Plex Invite (Free Use)', to: 'https://emi.vnil.me/j/WEBSITE', target: '_blank', type: 'link' }
                ]
            },
            { label: 'Public Bots', to: '/bots', type: 'link' },
            {
                label: 'Sequenzia Things',
                type: 'subdropdown',
                items: [
                    { label: 'Ambient Display', to: 'https://app.vnil.me/ambient?displayname=Untitled', target: '_blank', type: 'link' },
                    { label: 'Sequenzia', to: 'https://app.vnil.me/', target: '_blank', type: 'link' }
                ]
            }
        ]
    },
    {
        label: 'Logins',
        type: 'dropdown',
        items: [
            { label: 'G-Mail', to: 'https://mail.google.com/', target: '_blank', type: 'link' },
            { label: 'Storage', to: 'https://stor.chibidreams.cloud/', target: '_blank', type: 'link' },
            { label: 'Stripe Dashboard', to: 'https://dashboard.stripe.com', target: '_blank', type: 'link' },
            { label: 'UID', to: 'https://vnil.ui.com', target: '_blank', type: 'link' },
            { label: 'Router Login', to: 'https://unifi.ui.com', target: '_blank', type: 'link' },
            { label: 'Cloudflare Dashboard', to: 'https://dash.cloudflare.com/', target: '_blank', type: 'link' },
            { label: 'SSO Auth Management', to: 'https://auth.kiglove.moe/realms/master/account/', target: '_blank', type: 'link' },
            { label: 'Admin Access', to: '/neko-roots', type: 'link', roles: 'admin' }
        ]
    },
    {
        label: 'Extra Info',
        type: 'dropdown',
        items: [
            {
                label: 'Clothing',
                type: 'subdropdown',
                items: [
                    { label: 'Cosplay/Kigu List (Has/Wants/Needs Repair Or Replaced)', to: 'https://docs.google.com/document/d/1VBMstoR9kDFxgQbyi_ZLOJ5_kriX98jv/edit?usp=sharing&ouid=103792036069402227180&rtpof=true&sd=true', target: '_blank', type: 'link' },
                    { label: 'Clothing Choices (Has Cosplay/Kigu Too)', to: 'https://docs.google.com/document/d/1k19rucUBjtmiNUPRZzTijKyExhFReZwx/edit?usp=sharing&ouid=103792036069402227180&rtpof=true&sd=true', target: '_blank', type: 'link' }
                ]
            },
            {
                label: 'Information',
                type: 'subdropdown',
                oneOfRoles: ['size', 'calendar'],
                items: [
                    { label: "Neko's Calendar", to: '/calendar', type: 'link', roles: 'calendar' },
                    { label: 'Dame Measurements', to: '/dm', type: 'link', roles: 'size' }
                ]
            }
        ]
    },
    {
        label: 'Contact Us',
        type: 'dropdown',
        items: [
            { label: 'Contact Info', to: '/contact', type: 'link' },
            { label: 'My Artists', to: '/artists', type: 'link' },
            { label: 'Privacy Policy', to: '/privacy', type: 'link' },
            { label: 'Status', to: '/status', type: 'link' }
        ]
    },
    { label: 'Account', to: '/account', type: 'link', auth: 'authenticated' },
    { label: 'Login', to: '/auth/login', type: 'link', auth: 'unauthenticated' }
];