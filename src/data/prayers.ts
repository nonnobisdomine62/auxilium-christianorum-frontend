interface Prayer {
  title: string;
  content: string[];
}

export interface DailyPrayers {
  everyday: Prayer[];
  sunday: Prayer[];
  monday: Prayer[];
  tuesday: Prayer[];
  wednesday: Prayer[];
  thursday: Prayer[];
  friday: Prayer[];
  saturday: Prayer[];
  conclusion: Prayer[];
}

export const prayers: DailyPrayers = {
  everyday: [
    {
      title: "Opening Prayer",
      content: [
        "V. Our help is in the name of the Lord.",
        "R. Who made heaven and earth.",
        "",
        "Most gracious Virgin Mary, thou who wouldst crush the head of the serpent, protect us from the vengeance of the evil one. We offer our prayers, supplications, sufferings and good works to thee so that thou may purify them, sanctify them and present them to thy Son as a perfect offering. May this offering be given so that the demons that influence or seek to influence the members of the Auxilium Christianorum do not know the source of their expulsion and blindness. Blind them so that they know not our good works. Blind them so that they know not on whom to take vengeance. Blind them so that they may receive the just sentence for their works. Cover us with the Precious Blood of thy Son so that we may enjoy the protection which flows from His Passion and Death. Amen."
      ]
    },
    {
      title: "Required Prayers",
      content: [
        "St. Michael Prayer",
        "Guardian Angel Prayer",
        "Our Father",
        "Hail Mary",
        "Glory Be"
      ]
    },
    {
      title: "Litany of the Most Precious Blood",
      content: [
        "Lord have mercy.",
        "Christ have mercy.",
        "Lord have mercy.",
        "Christ hear us.",
        "Christ graciously hear us.",
        "God the Father of Heaven, have mercy on us.",
        "God the Son, Redeemer of the world, have mercy on us.",
        "God the Holy Spirit, have mercy on us.",
        "Holy Trinity, One God, have mercy on us.",
        "Blood of Christ, only-begotten Son of the Eternal Father, save us.",
        "Blood of Christ, Incarnate Word of God, save us.",
        "Blood of Christ, of the New and Eternal Testament, save us.",
        "Blood of Christ, falling upon the earth in the Agony, save us.",
        "Blood of Christ, shed profusely in the Scourging, save us.",
        "Blood of Christ, flowing forth in the Crowning with Thorns, save us.",
        "Blood of Christ, poured out on the Cross, save us.",
        "Blood of Christ, price of our salvation, save us.",
        "Blood of Christ, without which there is no forgiveness, save us.",
        "Blood of Christ, Eucharistic drink and refreshment of souls, save us.",
        "Blood of Christ, stream of mercy, save us.",
        "Blood of Christ, victor over demons, save us.",
        "Blood of Christ, courage of Martyrs, save us.",
        "Blood of Christ, strength of Confessors, save us.",
        "Blood of Christ, bringing forth Virgins, save us.",
        "Blood of Christ, help of those in peril, save us.",
        "Blood of Christ, relief of the burdened, save us.",
        "Blood of Christ, solace in sorrow, save us.",
        "Blood of Christ, hope of the penitent, save us.",
        "Blood of Christ, consolation of the dying, save us.",
        "Blood of Christ, peace and tenderness of hearts, save us.",
        "Blood of Christ, pledge of eternal life, save us.",
        "Blood of Christ, freeing souls from purgatory, save us.",
        "Blood of Christ, most worthy of all glory and honor, save us.",
        "Lamb of God, Who takest away the sins of the world, spare us, O Lord.",
        "Lamb of God, Who takest away the sins of the world, graciously hear us, O Lord.",
        "Lamb of God, Who takest away the sins of the world, have mercy on us.",
        "",
        "V. Thou hast redeemed us with Thy Blood, O Lord.",
        "R. And made of us a kingdom for our God.",
        "",
        "Let us pray.",
        "",
        "Almighty, and everlasting God, Who hast appointed Thine only-begotten Son to be the Redeemer of the world, and hast been pleased to be reconciled unto us by His Blood, grant us, we beseech Thee, so to venerate with solemn worship the price of our salvation, that the power thereof may here on earth keep us from all things hurtful, and the fruit of the same may gladden us for ever hereafter in heaven. Through the same Christ our Lord. R. Amen."
      ]
    }
  ],
  sunday: [
    {
      title: "Sunday Prayer",
      content: [
        "O Glorious Queen of Heaven and Earth, Virgin Most Powerful, thou who hast the power to crush the head of the ancient serpent with thy heel, come and exercise this power flowing from the grace of thine Immaculate Conception. Shield us under the mantle of thy purity and love, draw us into the sweet abode of thy heart and annihilate and render impotent the forces bent on destroying us. Come Most Sovereign Mistress of the Holy Angels and Mistress of the Most Holy Rosary, thou who from the very beginning hast received from God the power and the mission to crush the head of Satan. Send forth thy holy legions, we humbly beseech thee, that under thy command and by thy power they may pursue the evil spirits, counter them on every side, resist their bold attacks and drive them far from us, harming no one on the way, binding them to the foot of the Cross to be judged and sentenced by Jesus Christ Thy Son and to be disposed of by Him as He wills.",
        "",
        "St. Joseph, Patron of the Universal Church, come to our aid in this grave battle against the forces of darkness, repel the attacks of the devil and free the members of the Auxilium Christianorum, and those for whom the priests of the Auxilium Christianorum pray, from the strongholds of the enemy.",
        "",
        "St. Michael, summon the entire heavenly court to engage their forces in this fierce battle against the powers of hell. Come O Prince of Heaven with thy mighty sword and thrust into hell Satan and all the other evil spirits. O Guardian Angels, guide and protect us. Amen."
      ]
    }
  ],
  monday: [
    {
      title: "Monday Prayer",
      content: [
        "In Thy name, Lord Jesus Christ, we pray that Thou cover us, our families, and all of our possessions with Thy love and Thy Most Precious Blood and surround us with Thy Heavenly Angels, Saints and the mantle of Our Blessed Mother. Amen."
      ]
    }
  ],
  tuesday: [
    {
      title: "Tuesday Prayer",
      content: [
        "Lord Jesus Christ, we beg Thee for the grace to remain guarded beneath the protective mantle of Mary, surrounded by the holy briar from which was taken the Holy Crown of Thorns, and saturated with Thy Precious Blood in the power of the Holy Spirit, with our Guardian Angels, for the greater glory of the Father. Amen."
      ]
    }
  ],
  wednesday: [
    {
      title: "Wednesday Prayer",
      content: [
        "In the Name of Jesus Christ, Our Lord and God, we ask Thee to render all spirits impotent, paralyzed and ineffective in attempting to take revenge against anyone of the members of the Auxilium Christianorum, our families, friends, communities, those who pray for us and their family members, or anyone associated with us and for whom the priests of the Auxilium Christianorum pray. We ask Thee to bind all evil spirits, all powers in the air, the water, the ground, the fire, under ground, or wherever they exercise their powers, any satanic forces in nature and any and all emissaries of the satanic headquarters. We ask Thee to bind by Thy Precious Blood all of the attributes, aspects and characteristics, interactions, communications and deceitful games of the evil spirits. We ask Thee to break any and all bonds, ties and attachments in the Name of the Father, and of the Son and of the Holy Spirit. Amen."
      ]
    }
  ],
  thursday: [
    {
      title: "Thursday Prayer",
      content: [
        "My Lord, Thou art all powerful, Thou art God, Thou art our Father. We beg Thee through the intercession and help of the Archangels Sts. Michael, Raphael, and Gabriel for the deliverance of our brothers and sisters who are enslaved by the evil one. All Saints of Heaven, come to our aid.",
        "",
        "From anxiety, sadness and obsessions – We implore Thee, deliver us, O Lord.",
        "From hatred, fornication, and envy – We implore Thee, deliver us, O Lord.",
        "From thoughts of jealousy, rage, and death – We implore Thee, deliver us, O Lord.",
        "From every thought of suicide and abortion – We implore Thee, deliver us, O Lord.",
        "From every form of sinful sexuality – We implore Thee, deliver us, O Lord.",
        "From every division in our family, and every harmful friendship – We implore Thee, deliver us, O Lord.",
        "From every sort of spell, malefice, witchcraft, and every form of the occult – We implore Thee, deliver us, O Lord.",
        "",
        "Thou who said, \"Peace I leave with you, my peace I give unto you.\" Grant that, through the intercession of the Virgin Mary, we may be liberated from every demonic influence and enjoy Thy peace always. In the Name of Christ, our Lord. Amen."
      ]
    }
  ],
  friday: [
    {
      title: "Litany of Humility",
      content: [
        "O Jesus, meek and humble of heart, hear me.",
        "",
        "From the desire of being esteemed, deliver me, Jesus.",
        "From the desire of being loved, deliver me, Jesus.",
        "From the desire of being extolled, deliver me, Jesus.",
        "From the desire of being honored, deliver me, Jesus.",
        "From the desire of being praised, deliver me, Jesus.",
        "From the desire of being preferred to others, deliver me, Jesus.",
        "From the desire of being consulted, deliver me, Jesus.",
        "From the desire of being approved, deliver me, Jesus.",
        "From the fear of being humiliated, deliver me, Jesus.",
        "From the fear of being despised, deliver me, Jesus.",
        "From the fear of suffering rebukes, deliver me, Jesus.",
        "From the fear of being calumniated, deliver me, Jesus.",
        "From the fear of being forgotten, deliver me, Jesus.",
        "From the fear of being ridiculed, deliver me, Jesus.",
        "From the fear of being wronged, deliver me, Jesus.",
        "From the fear of being suspected, deliver me, Jesus.",
        "",
        "That others may be loved more than I, Jesus, grant me the grace to desire it.",
        "That others may be esteemed more than I, Jesus, grant me the grace to desire it.",
        "That in the opinion of the world, others may increase and I may decrease, Jesus, grant me the grace to desire it.",
        "That others may be chosen and I set aside, Jesus, grant me the grace to desire it.",
        "That others may be praised and I unnoticed, Jesus, grant me the grace to desire it.",
        "That others may be preferred to me in everything, Jesus, grant me the grace to desire it.",
        "That others may become holier than I, provided that I become as holy as I should, Jesus, grant me the grace to desire it."
      ]
    }
  ],
  saturday: [
    {
      title: "Saturday Prayer",
      content: [
        "O God and Father of our Lord Jesus Christ, we call upon Thy holy Name and humbly beseech Thy clemency, that, through the intercession of the ever immaculate Virgin, our Mother Mary, and of the glorious Archangel Saint Michael, thou wouldst vouchsafe to help us against Satan and all the other unclean spirits that are prowling about the world to the great peril of the human race and the loss of souls. Amen."
      ]
    }
  ],
  conclusion: [
    {
      title: "Conclusion for Every Day",
      content: [
        "August Queen of the Heavens, heavenly Sovereign of the Angels, Thou who from the beginning hast received from God the power and the mission to crush the head of Satan, we humbly beseech Thee to send thy holy legions, so that under Thy command and through Thy power, they may pursue the demons and combat them everywhere, suppress their boldness, and drive them back into the abyss. O good and tender Mother, Thou wilt always be our love and hope! O Divine Mother, send Thy Holy Angels to defend us and to drive far away from us the cruel enemy. Holy Angels and Archangels, defend us, guard us. Amen.",
        "",
        "Most Sacred Heart of Jesus, have mercy on us.",
        "Mary, Help of Christians, pray for us.",
        "Virgin Most Powerful, pray for us.",
        "St. Joseph, pray for us.",
        "St. Michael the Archangel, pray for us.",
        "All You Holy Angels, pray for us.",
        "",
        "In the name of the Father, the Son and the Holy Spirit. Amen."
      ]
    }
  ]
}; 