enum Membership {
    Simple,
    Standart,
    Premium
}

const membership = Membership.Standart
console.log(membership); // => 1

const membershipReverse = Membership[2]
console.log(membershipReverse); // => Premium

enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}

console.log(SocialMedia.FACEBOOK); // => FACEBOOK
console.log(SocialMedia.INSTAGRAM); // => INSTAGRAM
