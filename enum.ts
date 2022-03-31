enum Membership {
    Simple,
    Standart,
    Premium
}

const membership = Membership.Standart //1
const membershipReverse = Membership[2] //Premium
console.log(membershipReverse) //Premium

enum Socials {
    VK = 'VK',
    FACEBOOK = 'FB',
    INSTAGRAM = 'MEGA'
}
const social = Socials.INSTAGRAM
console.log(social) //MEGA