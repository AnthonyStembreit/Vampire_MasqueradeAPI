const { Discipline } = require('../models');

const disciplinesData = [
    {
        primary_name: "Animalism",
        powers: [
            {
                name: "Feral Whispers",
                level: "Basic",
                cost: ,
                description: "By looking into the eyes of an animal and perhaps making some related sound (like growling or hissing), you are capable of communicating with the creature. Your predatory nature allows you to understand and cow natural creatures. De- pending on your predilections, you may deal with the animal equitably, or you may demand obedience. The animal may not wish to obey, but this Discipline’s power insures that the animal is at least favorably disposed toward you. Even if the animal is intractable, you may be able to force it into submission. Using this power requires that you look into the eyes of the creature with which you desire to communicate; if this gaze is lost, then you must attempt to re-establish contact if you wish to continue communicating. Most animals will continue to attend your gaze while you are communicating with them, though. Animals without eyes, or very simple in nature, do not have enough of a mind or Beast to connect with easily. This power works best with predatory creatures and larger birds, reptiles and mammals. You may communicate with animals without any test. However, to issue commands, you must defeat the animal in a Social Challenge — generally, the animal will have the equivalent of six to eight Traits for this challenge, as de- termined by a Narrator. If you succeed, you can count on the animal following your orders for the remainder of the evening. Most animals lack the intelligence necessary to carry out complex or conditional commands, but they can perform simple tasks like fetching, following people or guarding locations.",
            },
            {
                name: "Beckoning",
                level: "Basic",
                cost: ,
                description: "By uttering a howl or other animal noise, you can summon animals to your side. Depending on how you couch your call, you can summon all animals of a particular type within the area, or just a few. The creatures hasten to your Beckoning, ready to aid or simply to provide nourishment. Though animals called by this power do not fall under your control automatically, they are at least favorably inclined toward you. You must expend a Social Trait for each animal that you summon. Only animals that can hear the summons respond; you cannot call a bird from across a city, nor could you call an animal that cannot hear. You may be as specific as you desire within the category of summoned animals. For instance, you may choose to summon all the rats in an area, or just the white ones, or even a specific rat that you know about. Animals summoned with this power may take some time to arrive. Your Storyteller can issue cards for your animals or swarms, as appropriate. Animals summoned with this power remain as long as they are not attacked or threatened (within their conception — a rat would certainly feel threatened by the move- ments of several people in the area), or until the scene ends. You can use other Animalism powers normally to command or control the animals called.",
            },
            {
                name: "Quell the Beast",
                level: "Intermediate",
                cost: 6,
                description: "Touching (from surprise or with a Physical Challenge) or gazing into the eyes of a victim, you can project the fearsome predatory aspect of your vampiric nature. Your Beast serves to show your ultimate mastery over your prey, cowing humans and animals alike into submission. Without the inner fire of powerful emotions, the subject is apathetic. Different vampires evoke this power in different ways. Nosferatu most com- monly soothe the Beasts of their subjects, drawing them into lassitude, while Tzimisce and Gangrel often assert their mastery over lesser subjects and terrify the victims into submission. Regardless of the means, the results are similar; any vampire using this Discipline can choose her particular style. No speech or vocalization is necessary — only the physical or eye contact. You must engage in a Social Challenge with your victim in order to use this power. Once you have intimidated or soothed the subject, he may no longer use Willpower Traits for the remainder of the evening. Such a subject also gains the Negative Traits Submissive x 2, for the same duration. Multiple uses of this power are not cumulative; once affected, the victim cannot receive additional Submissive Traits through further uses of this Discipline. Cowing the Beast of a vampire is much more difficult. You must expend a Willpower Trait to make the attempt (before engaging in the Social Challenge). If successful, the vampire suffers from the normal effects of this power. Alternately, you may use this power on a vampire in frenzy, causing the Cainite to snap back into lucidity. In such a case, you expend the Willpower Trait and make the Social Challenge as usual, but if you succeed, the vampire merely returns to lucidity instead of suffering the other effects of this Discipline. You may not use this Discipline on yourself.",
            },
            {
                name: "Subsume the Spirit",
                level: "Intermediate",
                cost: 6,
                description: "Locking eyes with an animal, you can now move your consciousness into its body, dominating it completely. Your soul pushes aside the animal’s weaker spirit, and your own body falls into a comatose state, while your spirit uses the animal as a vessel. Though influenced by the animal’s bestial nature, you can still exercise your intellect and even some of your supernatural capabilities. You are limited by the physical constraints of any animal that you possess — your physical Disciplines do not augment the creature, nor do you have the ability to speak or manipulate objects if that is normally outside of the animal’s physical capabilities. However, you can use the animal’s natural abilities, such as claws, wings, poison and gills. There is no functional limit to the distance at which you can exercise this Disci- pline once you have possessed an animal — you may move freely in the animal’s body, even in sunlight (subject to the normal restrictions for remaining awake during the day), without concern for your vampiric form. However, you are not automatically aware of what transpires around your comatose body. If your animal form suffers injury, your vampiric body suffers equal sympathetic injury; if the animal body is slain, your soul returns to your body and you enter torpor. Should you choose to leave the animal’s body for your own, this happens regardless of distance as long as you are conscious. However, you must declare this intent at the beginning of the turn and survive until the end of the turn (if you are in combat or other dangerous situations). Fleeing the animal body does not require an action; you may still act normally in the turn that you intend to return to your body. If you are injured (with- out being knocked unconscious) while attempting to return to your own body, you must make a Simple Test — a tie indicates that you remain in the grip of animalistic behavior for the rest of the scene, and a failure causes you to immediately enter frenzy, though in both cases you return to your Cainite form automatically. If your vampiric body dies while you inhabit an animal’s form, you can try to remain in the animal body. Each sunrise, you must make a Simple Test (win or tie). If you lose, your spirit plunges into the astral realms, gone forever. Thus, you have only a short time to survive. Exercising this power requires that you gaze into the eyes of the beast that you intend to possess (if the animal has no eyes, you may not possess it). You must then expend Social Traits to move into the animal’s body. The more Social Traits you choose to expend, the more complete your connection to the animal form. With simple possession, you direct the body as you choose; more complete dominance allows you to use some of your own Disciplines while in the body. Once you have used this power, you suffer from some of the animal’s habits and instincts. For each Social Trait expended on the possession, you suffer from one Negative Trait of Feral. These Traits remain until you overcome the animal’s behavior patterns by expending Willpower Traits — one Willpower Trait for each Negative Trait removed. You should roleplay the animal’s mannerisms, even after returning to your own body, until you have managed to remove these Negative Traits, although you can slowly overcome them by spending Willpower Traits over time (you need not try to overcome all of the Feral habits at once).",
            },
            {
                name: "Drawing Out the Beast",
                level: "Advanced",
                cost: 9,
                description: "Your mastery over the Beast Within is superb. Through your keen under- standing of predatory nature and the ability to influence other creatures, you can draw out your own Beast, pushing your frenzy on others. Animals and ghouls are favored targets for this power, turning them into killing machines, but you can attempt to exert your Beast on anyone. You must be on the verge of frenzy to use this Discipline. You exert this power in lieu of making any Virtue Test to control your frenzy. Instead, you make a Social Challenge against any individual within your line of sight. Doing so does not cost an action; you may attempt this feat any time that you are about to frenzy. If you win, your frenzy is transferred to the victim. The hapless recipient immediately enters frenzy and even manifests some of your personality, habits and speech patterns (which should be roleplayed — typically, characters with the Investigation Ability may recognize your man- nerisms in the victim). The victim remains in a normal frenzy, while you are unaffected and unable to frenzy for the duration. Should the victim die while frenzied, though, the screaming Beast immediately returns to you, requiring you to make a Virtue Test or to exercise this power again. If you lose, you instead frenzy immediately with no Virtue Test, and you are unable to fight against your frenzy with Willpower Traits. While the Beast is loosed in a victim, you remain complacent and placid. However, if the victim leaves your sight before the frenzy is over, you lose your Beast, suffering as if subjected to Quell the Beast — you cannot use Willpower Traits and you gain the Negative Traits Submissive x 2. You must find the recipi- ent of your Beast and “convince” the Beast to return by acting in a monstrous fashion, or else kill the victim so that the Beast returns automatically.",
            }
            
        ],
        description: "For a vampiric predator, mastery over animals is a simple task; the vampire’s Beast is more dangerous than any animal’s nature. By drawing on this feral connection, vampires can communicate with and control animals. Indeed, vampires who develop a communion with their animal side often seem attractive or at least masterful to most animals. This Discipline is practiced by the Gangrel, Nosferatu, Ravnos and Tzimisce clans; the Gangrel and Nosferatu often establish equitable or friendly relationships with natural creatures, while the Tzimisce show their mastery over lesser life forms through this power. Ravnos find animals to be useful scouts, spies and meals in their nomadic travels. Use the Animal Ken Ability for retests with the Animalism Discipline."
    },
    {
        primary_name: "Auspex",
        powers: [
            {
                name: "Heightened Senses",
                level: "Basic",
                cost: ,
                description: "At will, you can extend your senses beyond human norms. Your eyesight and hearing sharpen to twice your mortal limits, while your touch, smell and taste are acute enough to pick out tiny details and features with ease. You can sharpen any or all of your senses, as desired. Furthermore, you sometimes have flashes of insight, preternatural awareness of danger or future events. Any senses augmented by this Discipline function at twice normal effectiveness, allowing you to spot hidden foes, hear the rustle of leaves outside, taste a bit of poison in vitae, read a hand-written note by touch and smell incense burned hours ago. Should your senses be overwhelmed, though, you may be stunned temporarily. A loud gunshot, a flash of light or other overwhelming factor can incapacitate one of your senses for a time, causing you to lose the benefits of this Discipline. Furthermore you remain completely stunned for one turn, and you lose the sharpened sense in question for the duration of the scene, unless you expend a Willpower Trait to keep your wits about you.",
            },
            {
                name: "Aura Perception",
                level: "Basic",
                cost: ,
                description: "By watching a subject carefully, you can pick out the glowing halo or aura that surrounds all creatures. The interplay of colors in this aura gives you insight into the subject’s emotions, motives and true nature. This Discipline is notice- able, though, as you stare at the subject with intense concentration. You must be able to see your target in order to use Aura Perception. You then spend a turn in concentration and make a Static Mental Challenge with a difficulty of the target’s number of Mental Traits (more complex targets are harder to read). Since using this power is a Static Test, the target may not relent or retest. If you succeed, you may ask any one of the following questions, which the subject must answer truthfully: What is your current mood/emotional state? What sort of creature are you (human, vampire, werewolf, etc., subject to your knowledge of such beings and their auras)? Are you under the effects of any form of magic? Have you committed diablerie (see the section on diablerie, p. 216, for how long this form of detection is viable)? Was the last thing you said a lie? Aura Perception also allows you to sense ghosts and astral forms. If you suspect the presence of a ghost in an area, you may expend a Mental Trait to make a normal challenge to sense its aura, as described previously. If you succeed, you are aware of the ghost’s aura as a pale, flickering and amorphous light, though this is not sufficient for you to identify specific individual ghosts.",
            },
            {
                name: "The Spirit’s Touch",
                level: "Intermediate",
                cost: 6,
                description: "Every being leaves traces of its thoughts and emotions wherever it goes. With this Discipline, you can read these psychic impressions from objects that others have handled, or that have strong emotional events tied to them. A simple touch and a moment of concentration unlocks a flood of images and sensations, possibly giving insight into the past of the item. Note that you may only use this power on objects or places, not on people, vampires, animals or other living creatures. By touching an item and expending a Mental Trait for a turn of concentration, you gain a brief flash of insight into any powerfully emotional events surrounding the object in question. Each use of this power on an object allows you to ask a Nar- rator one of the following questions, requiring a truthful answer: Who last touched this object (before me)? Was this object used in any emotionally stressful events, like a murder, a passionate romance or a maniacal rage? What strong emotions drove a particular subject holding this object? Answers to these questions gener- ally come in the form of images and impressions; you may not get exact names or lists of information, but instead distorted pictures, flashes of sudden passion and repeating sounds and voices. It is up to you to interpret such information. Using this power on objects charged with particularly powerful emotions — a knife used to kill someone, a blanket clutched during childbirth, a bizarre puzzle that drove someone to insanity — may cause you to be temporarily overcome with emotions that are not your own. At the discretion of a Narrator or Storyteller, you may temporarily suffer from a derangement for the rest of the scene.",
            },
            {
                name: "Telepathy",
                level: "Intermediate",
                cost: 6,
                description: "Projecting your senses outward, you can pierce the shroud of reason in the minds of others, drawing forth their very thoughts. You can link your conscious- ness to anyone you can see, sending or receiving concepts that you and the target “hear” in your respective minds. In order to use Telepathy, you must make a Mental Challenge against your subject. A willing subject may relent to this mental contact, but there is no way to identify the originator of a given telepathic missive short of making contact (or you choose to identify yourself). You must also spend a full turn in concentration, focusing on your subject. If you succeed, you establish a brief link, allowing you to send or scan thoughts as long as you maintain the contact. You may issue a stream of thoughts that the subject “hears” as a single concept, or you can pluck a thought from the victim, asking a single question and demanding a truthful answer. Legitimate secrets that can be uncovered are anything that could be discerned with Aura Perception, as well as such questions as: What is the appearance of a person, place or item about which you are speaking? What is the name of a person, place or item about which you are speaking? What element have you omitted from your answer to a question, if any? What is the true answer to a question that you have lied about? What memories do you have of one topic (querent’s choice) of current conversation? If you choose to interrogate an unwilling victim, you must make a Mental Challenge for each question asked; if simply communicating normally, no additional challenges are required. With effort, you can probe deep into the consciousness of an open mind, drawing out hidden secrets or buried memories. Doing so allows you to ask more detailed ques- tions than the cursory ones usually employed with Telepathy. By expending a Mental Trait after establishing a successful telepathic link, you may ask and expect a truthful response to: What is one of your Flaws or Negative Traits, if any (subject’s choice)? What is one of your derangements, if any (subject’s choice)? Each question asked requires a Static Mental Challenge against the subject’s Mental Traits, and the subject may not relent — you are delving deep into the mind, which reacts automatically to defend against intrusion. At Storyteller discretion,Telepathy may discern clumsy uses of Dominate, particu- larly of Forgetful Mind, but with a great deal of effort. The most common means of doing so is to establish a link and begin asking questions, as described in the paragraph above. A second Static Mental Challenge against the subject’s Mental Traits may allow you to spot gaps in a memory or where a memory has been poorly reconstructed. Modern vampires compare such gaps to be like watching a badly spliced film. Communication with Telepathy proceeds in impulses, images and feelings, and it does not rely on the use of a common language, so even people who do not speak the same language may make themselves understood. Individuals unused to the sud- den onslaught of Telepathy may be momentarily stunned or disoriented by projected thoughts, at the Narrator’s discretion. Telepathy may also be used simply to eavesdrop; scanning someone telepathically is invisible and largely undetectable, unless another character with Telepathy tries to “listen in” on the link (using a Static Mental Chal- lenge against the scanner). Such eavesdropping can only be used on surface thoughts. Beware, though — if you force your way into someone’s mind without permission, the target may make a Willpower Challenge to force you to break off your link. You may only use your Telepathy on one subject at a time, but this limit does not preclude someone else from using her own Telepathy on you. If you contact a subject and then use your Telepathy on someone else, your link to the first subject collapses and must be re-established later. Using Telepathy on a supernatural creature is a taxing exercise, and it requires the expenditure of a Mental Trait. This Trait is expended before the Mental Challenge is made to establish the link. Telepathy only functions on beings with conscious thought. The Discipline has no effect on constructs that are not self-aware or on normal animals.",
            },
            {
                name: "Psychic Projection",
                level: "Advanced",
                cost: 9,
                description: "No longer confined to the physical plane, you can project your senses and awareness outside of your own body. Thus untethered, your consciousness roams various planes of thought, allowing you to spy on areas all over the world as an incorporeal spirit. Without the concerns of mass and matter, you easily pass through any physical barrier and move at the speed of thought to any place on Earth, under the orbit of the moon. While your senses are projected, your body lies in a comatose state, un- aware of its surroundings. Your psychic form does not tire from travel, nor is it hindered or injured by the material world. Indeed, you are completely invisible and intangible, unable to affect anything physically. However, your spirit-form can still sense its surroundings normally, even using your other powers of Auspex. Your immaterial form is tied to your material corpse through a silver cord, a sort of psychic tether that keeps you from becoming lost in the realms of spirit. Sending your senses out in this fashion requires the expenditure of a Willpower Trait. You may remain out of your body as long as you like, though the rise of the sun over your physical form may force you into slumber. Furthermore, by expending an additional Willpower Trait, you can manifest for a single turn as an intangible apparition, allowing you to be seen and to speak audibly. While materialized, you can use any of your Mental or Social Disciplines simply by expending a Mental Trait before making the appropriate additional expenditures or challenges. While visible, you appear as an idealized form of yourself, complete with projected trappings, though your real-world physical possessions do not come with you in spirit form. Even while visible, you remain intangible and thus immune to injury from conventional sources like claws, fire, sunlight and mundane weapons (although your comatose body can still be harmed). While in astral form, you may not possess other bodies, even if you have that talent in Dominate. You may deal normally with other astral forms that you encounter, conversing and using Mental or Social Disciplines. You may even attempt to injure other astral travelers by attacking their silver cord. Such astral combat uses Mental Challenges, with damage causing the opponent to lose Willpower Traits. Once an astral combatant runs out of Willpower Traits, his silver cord snaps, stranding him in the spirit realms. From there, the spirit may accidentally wander deeper into other worlds (such as the Dark Umbra in Oblivion or the Realms described in Laws of the Wild), or he may stumble about until he finds a way to return to his body. Some spirits thus trapped never return, captured or devoured by monstrous entities that dwell in the astral plane. While astral, your consciousness exists in a mental projection of the mate- rial world. You cannot directly interact with or see wraiths, Umbral spirits or Garou (see Oblivion and Laws of the Wild), unless you find a means to travel to or sense the other spirit worlds. Similarly, your astral form is invisible and intangible to them unless you manifest in the physical world.",
            }
            
        ],
        description: "A predator’s senses must be fearfully acute, so many vampires hone their sensory talents to incredible sharpness. This improved awareness starts merely by expanding physical senses, but as a vampire’s powers of perception grow, consciousness itself becomes fleeting and sublime. Such a heightened awareness encompasses subtle textures and emotional states, transcending the physical limitations of the body while developing sharpness of the mind. The powers of Auspex grant the ability to see through supernatural deception. With such focused attention, Auspex can even pierce the veils of Chimerstry and Obfuscate. Whenever Auspex is active (a conscious choice on the vampire’s part), a Mental Challenge may be made with an opponent to try to see through the illu- sions of Chimerstry or the misdirection of Obfuscate. Winning this challenge with Auspex penetrates the deceptive powers. Losing, though, indicates that the vampire is affected normally. For each level of difference between the subject’s Obfuscate or Chimerstry and the searcher’s Auspex, there is a Trait modifier on a one-for- one basis in the event of ties or overbids. For example, a searching vampire with Telepathy (an intermediate level of Auspex) counts two additional Traits against an opponent who only knows Unseen Presence, a Basic level of Obfuscate. This bonus applies even when not using the full level of these Disciplines; an individual hid- ing with Mask of a Thousand Faces is still very difficult to detect if his mastery of Obfuscate has reached the Advanced level of Cloak the Gathering. A chance to see through supernatural concealment always exists, but doing so is much more likely if the searcher’s Auspex powers are highly advanced and/ or the opponent’s powers are weak. When using a Heightened Sense, hold up a number of fingers based on your power level (one for Basic, two for Intermediate, three for Advanced). The Auspex Discipline is most evidenced by the Tremere, Tzimisce and Malkavian clans, who use it for supernatural insights, and by the Toreador, who use their superb senses in conjunction with their artistic work. Auspex powers retest with the Investigation Ability. Willpower may be used for a single retest when attempting to spot an Obfuscated or otherwise hidden individual — in such a case, the vampire focuses his senses and concentrates fiercely, redoubling his searching efforts."
    },
    {
        primary_name: "Celerity",
        powers: [
            {
                name: "Alacrity",
                level: "Basic",
                cost: ,
                description: "Your reflexes are finely honed. Even as you watch others act, you can spring into action, completing your movements before they can respond. By expending a Blood Trait, you gain the ability to preempt any physical actions taken in the same turn, as long as you are aware of them (a face-to-face mugging, yes — a sniper attack, no). Thus, if someone declares an attempt to pull out a hidden weapon and shoot at you, you can preempt that action to pull out your own gun and fire back (instead of being relegated to dodging). Similarly, if someone attacks an ally, you can preempt the action to get in the way and fight against the aggressor instead. If you attempt to preempt someone using Celerity or a similar speed-enhancing power, the character with the highest degree of Celerity acts first.",
            },
            {
                name: "Swiftness",
                level: "Basic",
                cost: ,
                description: "With shocking speed, you move faster than humanly possible. Even as oth- ers are recovering from events, you are making your next move. Expend a single Blood Trait to gain one additional action in your turn, in addition to your preemptive Alacrity (the costs are not cumulative). This additional action is taken at the end of the turn, after everyone has resolved single basic actions. If multiple people have additional actions like this, they are all resolved at the same time, after basic actions. You can thus swing a sword twice, run twice as far as normal in a turn, fire a gun and then duck behind cover, or otherwise perform multiple feats.",
            },
            {
                name: "Rapidity",
                level: "Intermediate",
                cost: 6,
                description: "Even other Cainites are dazzled by your superhuman speed. You routinely catch dropped objects, and the speed of your passing whips clothes and loose debris about. Invoking all of your Celerity, at the cost of a single Blood Trait, enables you to use the Bomb in challenges of speed and agility. When performing an action where speed is of the essence, such as dodging an attack, throwing a knife or grabbing something out of someone’s hand, you can declare that you have Rapidity. Once thus declared, you may choose to use the Bomb, a fist with the thumb pointing upward; the Bomb defeats Rock and Paper, but loses to Scissors (the fuse is cut) and ties with other Bombs. This symbol is usable in any challenges of speed throughout the turn. However, you are not required to use the Bomb — it is simply another option. You may use Rapidity in any challenge where you rely on your own speed, even if your opponent attempts to use strength or stamina. Thus, if you try to use your Rapidity to dodge out of the way of someone grabbing at you, you can still use the Bomb. If the opponent possessed Might, you could still use the Bomb for speed, but the opponent would be able to use his Might retest for grappling.",
            },
            {
                name: "Legerity",
                level: "Intermediate",
                cost: 6,
                description: "Moving faster than the human eye can track, you blur across the landscape with the speed of a cheetah. Compared to you, bystanders are statues. You may activate your Legerity and all other Celerity levels for the turn at the cost of one Blood Trait. Your Legerity grants you one additional normal action at the end of the turn, in addition to your action from Swiftness (thus, you have at least three actions, a preempt and the Bomb in challenges of speed). Actions gained from Legerity come after basic and Swiftness actions, at the end of the turn.",
            },
            {
                name: "Fleetness",
                level: "Advanced",
                cost: 9,
                description: "When you call on your blood, you burst into a whirlwind of motion. Your passing extinguishes small flames, whips up flurries of debris and sows confu- sion among slower-moving entities. With a single Blood Trait, you activate all of your Celerity powers. You now win all ties in challenges of speed, regardless of Traits. If some other consideration would cause you to lose on ties (such as wounds or an enemy’s Potence), you compare Traits normally instead of losing automatically. This benefit lasts for the duration of the entire turn in which you use your Celerity. Your Fleetness functions in all challenges where you rely on speed, even if your opponent tries to use strength or stamina. Thus, if you use the speed of Fleetness to challenge an opponent who uses the strength of Puissance, ties are determined normally (since you both have powers that would win all ties). If the opponent only had Might, you would win all ties but still be vulnerable to a Might retest.",
            }
            
        ],
        description: "As one of the physical augmenting Disciplines of vampires, Celerity repre- sents preternatural speed and reflexes. When angered, stressed or consumed with need, a Cainite can use the power inherent in the blood to fuel her actions, moving with startling quickness. If attacked by surprise (see p.200), the victim may not use Celerity in the initial challenge — she must respond with her normal reflexes, and can only draw on her vampiric speed once she has reacted to the surprise. The Celerity Discipline is most common among the Assamite, Brujah and Tore- ador clans. The former two tend to use the powers of Celerity in battle, while the latter engages in feats of dance, rapid completion of artwork or to flee from danger. Since Celerity simply grants additional actions or modifiers to speed, it does not draw retests from any Ability. Actions performed with Celerity can still be retested appropriately (if shooting a gun twice, for instance, Firearms is used normally for a retest on each shot). Additional actions with Celerity can only be used for physical feats; one cannot use rapid- fire Dominate or Thaumaturgy with Celerity, for instance. As a general rule, Mental and Social Disciplines may not be activated during Celerity, except during Alacrity. Use of Celerity at the speed of Swiftness or above is generally considered a breach of the Masquerade. Note that a vampire need not use her full level of Celerity; a vampire with Advanced Celerity could simply rely on the Basic levels if desired."
    },
    {
        primary_name: "Chimerstry",
        powers: [
            {
                name: "Ignis Fatuus",
                level: "Basic",
                cost: ,
                description: "You generate a brief, static illusion that affects a single sense. You could cause the appearance of a rose in your hand, or make someone hear a low wind or feel the grating touch of sandpaper. This illusion has no real substance (and it cannot confine or injure your victims), but it can confound or mislead. The illusion cannot move in any fashion, although you can hold and move an illusion that you create. Thus, an illusion of a person cannot walk or fidget, but you can pick up and brandish an illusory knife. You must expend a Willpower Trait and best your subjects in a Social Chal- lenge to create this illusion. The illusion persists until you leave the area or until someone manages to disbelieve the effect (by passing a hand through the illusory rose, testing the air and feeling no wind, etc.). You may also dispel the illusion at your desire; doing so is immediate and requires no action.",
            },
            {
                name: "Fata Morgana",
                level: "Basic",
                cost: ,
                description: "Your illusions appeal to all of the senses. Though you still cannot harm or affect others physically with your phantasms, you can generate static constructs that seem real to any senses that you choose to affect. Thus, you can make a wall that appears solid, has a texture to the touch and smells of old dust and paint, but which has no real substance and can be passed through. Alternately, you could create a phantasm that lacks certain characteristics — you could cause a person to believe that you were holding a rose and brushing it against her cheek, provoking the feeling of the flower against the skin and the scent of the rose, when in fact you do not have a rose. These illusions are still incapable of independent movement. You must expend a Willpower Trait and a Blood Trait to create an illusion of this nature, and you must best your subjects in a Social Challenge. These illusions remain viable under the same conditions as phantasms created with Ignis Fatuus.",
            },
            {
                name: "Apparition",
                level: "Intermediate",
                cost: 6,
                description: "No longer confined to mere static images, you can create an illusion that ap- peals to many senses and has its own capabilities. You must first create an illusion using one of the lesser powers of this Discipline. Then, you can give it a semblance of life. People can be made to move, water to drip and lights to shine in complex patterns. You can even create blatantly strange moving effects, like a knife that flies about threateningly or a human who comes apart and back together again. You need only spend a single Blood Trait to give animation to an illusion. Once so imbued, you cause the phantasm to move in one specific pattern that you desire. If you spend a complete turn in concentration, you can change this pattern at no extra cost. You must be present for your illusion to sustain itself.",
            },
            {
                name: "Permanency",
                level: "Intermediate",
                cost: 6,
                description: "You no longer need to be present to sustain your illusory creations. Any illusion that you make with Chimerstry can be imbued with Permanency, allowing it to persist even if you leave the area. Once you have created an illusion, the expenditure of a single Blood Trait grants Permanency. The phantasm remains until you dissolve it or until someone sees through the illusion in some fashion. Thus, you can cast an illusion over an area and then leave, allowing the illusion to persist.",
            },
            {
                name: "Horrid Reality",
                level: "Advanced",
                cost: 9,
                description: "Your terrifying powers of deception extend directly into the mind of your victim. By focusing your efforts on one individual, you can create terrifyingly realistic phantasms. These illusions can affect the senses and move about in any fashion that you desire, but they affect only one victim. Because of the absolute realism of these phantasms, they can actually convince the victim that he has been injured or affected physically. An illusory fire created with this power burns its target, a phantom wall bars passage and a chimerical stake paralyzes a vampire if thrust through the heart. You must expend a Willpower Trait and defeat your victim in a Social Challenge in order to use this power effectively. Once active, the nightmarish creation of this power remains for the entire scene, and its effects can last even longer — if you create a gun with this power, it remains for the scene, but wounds inflicted with it score damage that lasts until disbelieved. Since the illusion is completely under your control, it can affect the victim without recourse to additional tests, meaning that you can make a chimerical gun that always hits or a chimerical stake that seems to bend and twist toward the heart. Illusory wounds of this sort cannot kill, though they can certainly drive the victim into a comatose state. These wounds only disappear when the victim is convinced either of the illusory nature of the effect or when he is convinced that he is 'healed.'",
            }
            
        ],
        description: "The Ravnos tricksters of India live in a world of illusions and dreams. Ac- cording to their philosophies, the material world itself is only a passing fantasy. Consequently, they wield power over perceptions, shaping their own illusions and crafting dreamstuff to their liking. With the Chimerstry Discipline, the Ravnos call on the energy of dreams and imagination, giving it form and phantasmic substance. This Discipline’s powers can conjure almost any shade that springs to mind, though plausible effects or du- plications of things that the conjurer has experienced are much more likely to fool viewers and victims. With enough mastery, the vampire can even give such illusions shadow-substance, causing injury to others. These illusions vanish only if dispelled by the creator, if the illusionist ceases concentrating on her creations or if they are banished by a disbelieving opponent who exerts enough presence of mind to prove the illusion’s nonexistence (say, by shoving a hand through an illusory wall). Chimerical illusions can only create, not remove — thus, they may add ele- ments to a scene, but cannot cause something to become invisible. Chimerstry could cover up something’s features but not remove selected parts. Furthermore, each illusion is a single object; one use of Chimerstry cannot create an entire host of illusory sensations or items. Chimerical creations must be free-standing items or sensory effects — a chimerical piece of clothing could conceal someone’s real appearance, but a chimerical stake could not suddenly materialize inside of someone’s chest (though it could later seem to be thrust there). Retests with Chimerstry use the Subterfuge Ability, as they attempt to trick, deceive and mislead."
    },
    {
        primary_name: "Dementation",
        powers: [
            {
                name: "Passion",
                level: "Basic",
                cost: ,
                description: "You can bring emotion to a fever pitch, accentuating any and all drives or fears that may occupy the mind of your subject. Alternately, you can diminish passions to whispers, quelling the most fierce emotional fires. You must engage your victim in a Social Challenge in order to use Passion. If you succeed, you enhance or dull the subject’s emotions, at your choice. If you heighten the target’s sensitivity, then the subject suffers from the Negative Men- tal Trait Impatient. If you dim the subject’s emotions, then the victim suffers the Negative Mental Trait Submissive. In either case, the target should roleplay the new condition. The incited Passion lasts for the remainder of the scene or for a full hour, whichever comes first. Successive uses of this Discipline on the same individual are not cumulative. The source of this affliction is not immediately obvious, though some elder vampires are aware of the mind tricks of the Malkavians, and they may deduce the source correctly if someone suddenly becomes manic or listless.",
            },
            {
                name: "The Haunting",
                level: "Basic",
                cost: ,
                description: "Freakish, fleeting nightmares follow your target. The surreal world seems to come alive in barely heard noises and brief glimpses of motion. Victims find themselves distracted by inexplicable sensations, often stemming from their own hidden fears and guilt. Though you have no control over these images, you can choose what sense is affected. With continuous prolonged exposure, your subject may fall to madness as these apparitions afflict his consciousness. You must expend a Blood Trait and engage in a Social Challenge with your victim in order to use this power. If successful, the subject suffers from fleeting nightmares, often plucked from his own subconscious. For the remainder of the evening, the victim suffers from the derangement Schizophrenia (see p. 214). Your use of this power is not im- mediately evident, although the victim should roleplay the effects of his new terrors.",
            },
            {
                name: "Eyes of Chaos",
                level: "Intermediate",
                cost: 6,
                description: "Scrutinizing patterns, you can find wisdom in the cracks of reality. Your insight extends to seemingly random patterns and bizarre manifestations of chance. Watch- ing the interplay of events around you, you can sometimes discern complex patterns in them; observing people in action, you uncover their motives and secrets. You can delve into someone’s innermost motives by watching his simple actions. You must watch the target for a full turn, concentrating on his actions and motions. Then, you must engage in a Mental Challenge with the target. If you succeed, you learn the subject’s Nature. By watching the fall of random events around you, you may gain insight into your current situation. If you spend a full turn in contemplation of cir- cumstances and expend a Mental Trait, you can predict (to some degree) the possible course of events. For the remainder of the scene, or for the next hour (whichever comes first), you cannot be surprised. Losing a challenge in Eyes of Chaos causes you to become entranced with the patterns around you. Consider this entrancement identical to the Toreador Clan Disadvantage.",
            },
            {
                name: "Voice of Madness",
                level: "Intermediate",
                cost: 6,
                description: "Simply by speaking aloud to your victims, you can reduce them to howling fear or anger. You address your targets in a reasonable tone, encouraging them to succumb to their inner demons. Those terrors then come to the fore, driving your victims to blind, uncontrolled panic. You must expend a Blood Trait to use this power. Then, by speaking to your victims for a full turn, you can attempt to drive them into frenzy. You may affect multiple people at once, as long as they can all hear you. You then make a Social Challenge against your targets; any who lose to you are brought to the verge of frenzy. Mortals immediately flee in terror, as if affected by Rötschreck. Vampires, Lupines and other creatures capable of frenzy make Self-Control/ Instinct Tests immediately, with a difficulty of four Traits, or else fall into a similar state. However, you must also test for Rötschreck, with a difficulty of three Traits. This frenzy lasts for an entire scene unless curbed with Willpower or other capabilities, and mortals do not remember their actions during this period of terror.",
            },
            {
                name: "Total Insanity",
                level: "Advanced",
                cost: 9,
                description: "Madness lies around the nearest corner of every mind. Pulling insanity from the recesses of your target’s deepest memories and beliefs, you cause the hapless victim to succumb to a wash of overpowering lunacy. You must gain your target’s total attention for a full turn; many Malkavians do so with sudden tricks, non-sequiturs and bizarre actions. You must then expend a Blood Trait and engage your target in a Social Challenge. If you win, your victim begins to suffer from five derangements, chosen by a Storyteller or Narrator, for the remainder of the evening. This Discipline is not cumulative — you cannot pile up more derangements with successive uses. For ease of use of Total Insanity, it may be handy to make up several cards with derangements listed on them, and allow your subject to choose five randomly.",
            }
            
        ],
        description: "The twisted psyches of Clan Malkavian house a passion and insight unmatched among the other lines of Cainites. Through their bizarre powers of Dementation, the Malkavians spread their madness, catalyzing insanity among mortal and vampire alike. Though this power was found only among the deranged Freaks of the Sabbat, a recent wave of instabil- ity has spread its nightmarish bubbles through Malkavians across the globe. The Malkavians do not consider the secrets of Dementation 'proprietary'; indeed, many seem almost eager to spread them. Curiously, other Cainite students of this Discipline need not be insane to use its powers. The Discipline does not seem to spread insanity, but rather, unlocks the doors of the psyche, exciting the madness that festers in every mind. Some Lunatics do not use Dementation consciously. These few instead catalyze the passions of their victims; such advisors and seers spread their insight to un- suspecting vampires, who in turn find themselves spiraling slowly out of control. Other Malkavians recognize, categorize and use the powers of Dementation like the other regimented Disciplines. Strangely, the most stable and sane-appearing Lunatics are typically the ones who exert their Dementation with the least awareness. Dementation powers use the Empathy Ability for retests."
    },
    {
        primary_name: "Dominate",
        powers: [
            {
                name: "Command",
                level: "Basic",
                cost: ,
                description: "Exerting your will against a single individual, you can give a simple com- mand and demand obedience. A single word, even one embedded in a sentence and stressed slightly, becomes an imperative command to your victim. You need only meet your victim’s gaze. As long as your victim sees your eyes and hears your voice, your command carries the authority of your blood. You must meet the gaze of your subject and speak a single word, emphasized for control. This command must be simple and easily understood: “Stop,” “Run,” “Sleep,” “Scream,” “Follow,” and “Silence!” are all acceptable examples. The com- mand cannot be blatantly harmful or self-destructive. You then engage in a Mental Challenge with your opponent. If you win, your victim must follow the order directly and immediately. The command cannot last more than 10 minutes.",
            },
            {
                name: "Mesmerism",
                level: "Basic",
                cost: ,
                description: "Like a hypnotist, you can impart commands to your subjects, even keying them on specific trigger events. If you can meet your subject’s gaze and speak aloud your commands, you can force the subject to obey your will. Unsuspecting victims can even be given commands that they must carry out later. By making a Mental Challenge against your subject, you can impart more complex or subconscious commands. You may give your subject any sort of command as long as it is not self-destructive. This command can either be triggered immediately (“Go and fetch me a mortal vessel”) or implanted with a particular trigger event (“When the prince ends court, sneeze loudly”). Only one such command may be implanted in a victim at a time, and unless other powers are used, the victim may well remember the process. Placing an order in your victim requires only as much time as it takes to speak the entirety of your order. Both the trigger and the suggestion must be clear and easily understandable.",
            },
            {
                name: "Forgetful Mind",
                level: "Intermediate",
                cost: 6,
                description: "Your considerable powers of mental manipulation allow you to exert your influence in the very memories of your victims. By meeting your target’s gaze, you can draw out answers to questions and even alter the subject’s memory. You can erase entire blocks of the victim’s past, or replace recollections subtly with your own dictated constructions. To uncover, alter or erase memories, you must make a Mental Challenge against your victim. With success, you can change up to 15 minutes of your victim’s memories; additional blocks of time may be altered with additional challenges. You can simply erase areas of the past, leaving the victim with a “hole” in his recol- lections, or you can specify new memories to overwrite your victim’s experiences. By questioning your victim, you can also prompt him to elucidate his memories, repeating back his own experiences. As long as you gaze into the victim’s eyes, and the subject is unthreatened, you keep the target pacified and unable to move or resist your hypnotic powers. Implanting additional commands with other Dominate powers still requires additional challenges, though. When altering someone’s memories, you should record the number of Mental Traits that you possess at the time of the alteration — later uses of Forgetful Mind may be able to overcome your powers. Although you can remove, add or change memories, you cannot destroy a subject’s actual capabilities. That is, you may remove all memory of a subject learning a particular Ability or Discipline, but the victim will still retain the capability in question — he may simply be unable to recall how and when he learned it. Forgetful Mind is most useful in changing someone’s memories of an event (causing someone to forget your feeding, for instance) or to cover traces of other powers (removing someone’s recollection of the use of Mesmerism, leaving an implanted command buried in the subconscious mind). The more detailed your description, the more realistic the memory seems to your victim. Use of Forgetful Mind can also determine if a particular set of memories is fake, by causing the subject to recall his overwritten experiences. By winning a Static Mental Chal- lenge against the Mental Traits of the previous dominator, you can determine if certain memories are falsely implanted or changed, and you can then restore the original memories or alter the false ones as you see fit. You cannot use this power on your own memories.",
            },
            {
                name: "Conditioning",
                level: "Intermediate",
                cost: 6,
                description: "The depths of your mental influence are frightful and pervasive. With time, you can strip away the defenses of the most determined mind, even removing your victim’s personality and free will. You must have unrestricted access to your subject for several full nights. Should you manage to tear down the victim’s resistance, her will is shattered and her mind becomes completely pliant to your whims. Each night that you attempt to exercise Conditioning, you must make a Mental Challenge against your victim. If you manage to accumulate as many successes as your subject’s Self-Control/ Instinct Traits (or Willpower Traits for victims without vampiric Virtues), you tear down the victim’s mind and turn her into a virtual slave. The victim loses creativity and self-direction, instead following your orders to the letter automatically. You need not make tests to Dominate such a victim; the subject follows your commands even if you cannot make eye contact. Furthermore, the subject gains one free retest against the Dominate powers of any other Cainites. A victim of Conditioning has little free will or motivation, and he has trouble reacting to stimuli. As a result, such pawns cannot produce artistic works or engage in teaching; they lack the drive and flexibility to perform these sorts of tasks. If an enslaved subject manages to avoid all contact with her master for six game sessions, minus one session for each Willpower Trait spent (minimum of one full session), then the Conditioning is shaken off and the subject reasserts her individuality. A drone may also be deprogrammed by the successful use of this Discipline again, just as if trying to enslave the subject. The subject resists automatically, but if enough successes are accumulated to perform proper Conditioning again, then the target’s original persona can be restored.",
            },
            {
                name: "Possession",
                level: "Advanced",
                cost: 9,
                description: "No mortal mind can resist the power of your will. With but a touch, you can move your consciousness into a mortal body, taking complete control of the shell and suppressing the victim’s mind. For the duration of this Possession, your own body lies comatose, while the mortal’s mind is unconscious and unaware of what transpires. Once you have touched a likely mortal subject (possibly requiring a Physical Chal- lenge to get a firm grip), you may expend a Willpower Trait immediately and make a Mental Challenge to exercise Possession. If you win the challenge, you take control of the mortal body, while your own body collapses without volition. You must expend a Mental Trait to finish the possession; additional Traits allow you to use some of your Mental and Social Disciplines while in the host body, as shown on the table. During the course of Possession, you experience everything that happens to the mortal body, as you guide its actions. Your Cainite form also suffers any damage sustained by the mortal body; if the mortal body dies before your consciousness can flee, you immediately collapse into torpor. If you wish to flee the mortal body for your own corpse, you must announce your intent at the beginning of the turn, and your spirit does not leave until the end of the turn (although you may still perform actions as normal). As soon as you leave, the mortal resumes control over his body (assuming that he’s still alive). While in the mortal body, you may travel any distance from your uncon- scious Cainite form. You have all the capabilities of the living body; you can even survive daylight, if you manage to stay awake (see p. 111). The body is as vulnerable as any other mortal’s, though. For this reason, most vampires use ghouls for Possession, relying on the inherent strength in such creatures. If your vampiric body is slain while your consciousness resides in another body, you can try to hang onto the form. However, you must make a Simple Test (win or tie) at each sunrise. If you lose, your spirit tumbles into the astral plane, lost forever. A possessed body also cannot be Embraced; your spirit prevents the transfer of the Curse, and the body simply dies. This power is ineffective on vampires and other supernatural creatures — their wills are too strong to be so completely overcome.",
            }
            
        ],
        description: "Many Cainites are willful creatures, casting about their ambitions and bend- ing mortals to their desires. For some, though, the strength of will channels into the power to bend minds and control actions. With a piercing gaze and a forceful word, Dominate can cause even the strongest mortal mind to crumble and push even other vampires to accede to one’s desires. Most Dominate powers require the victim to meet the Cainite’s gaze and to hear his commands. Simple sunglasses do not protect against this power; as long as the subject can see the dominator’s eyes, he can be affected. Furthermore, commands may be issued silently with Telepathy, as long as the victim meets the dominator’s gaze. Dominate is most common among the Giovanni, Lasombra, Tremere and Ventrue clans, who all exercise their authority unflinchingly. Retests with Dominate use the Intimidation Ability, as the vampire exercises his powerful will against your subject. A subject may attempt a retest by expend- ing a single Willpower Trait, and may only make one retest per challenge. A vampire of lower generation is always immune to a weaker vampire’s Dominate powers (although canny elders may feign otherwise)."
    },
    {
        primary_name: "Fortitude",
        powers: [
            {
                name: "Endurance",
                level: "Basic",
                cost: ,
                description: "While most Kindred still suffer the fatigue and pain of their injuries, you shrug off such hardships. Even the searing injuries of fire and sunlight can barely slow you. You do not suffer any wound penalties from anything past the Bruised health level, until you are struck into torpor or Final Death. When most vampires lose all ties due to being Wounded, or remain insensible and Incapacitated, you simply suffer the usual penalties of being Bruised.",
            },
            {
                name: "Mettle",
                level: "Basic",
                cost: ,
                description: "Wounds that would slow other vampires mean nothing to you. You can shrug off damage from most sources, ignoring pain and damage alike. Your body resists harm with incredible strength. On achieving this Discipline, you gain one additional health level, which functions just like an extra Healthy line on your health level chart. This health level can be lost and healed like any other.",
            },
            {
                name: "Resilience",
                level: "Intermediate",
                cost: 6,
                description: "Even the banes to most Cainites, fire and sunlight, rarely injure you. You can en- dure punishment that would reduce other Cainites to ash, albeit for a brief time. When you suffer aggravated damage, you may immediately make a Simple Test to try to reduce the severity of the damage. If you succeed, you reduce the injury to lethal damage. Before making the test, you may choose to expend a stamina-related Physical Trait, allowing you to reduce injury on a win or a tie. Otherwise, you must win the test outright. Use of Resilience is reflexive; it does not count as an action. You may only attempt to use this Discipline once on any given attack. Thus, if you suffer two or more levels of aggravated damage from a particular attack, you may test to reduce only one level to lethal damage.",
            },
            {
                name: "Resistance",
                level: "Intermediate",
                cost: 6,
                description: "Your vampiric endurance far surpasses that of any mortal, or even most other Cainites. You shrug off injury without noticeable effect. Blows that would stagger or kill a mortal may not even scratch you. When you suffer lethal or bashing damage, you may make a Simple Test immediately to avoid some of the damage. If you succeed, you remove one level of the damage from the amount suffered. Before making the test, you may choose to expend a stamina-related Physical Trait, allowing you to avoid a level of damage on a win or tie. Otherwise, you must win the test outright. Use of Resistance is reflexive; it does not count as an action. You may use this Discipline after reducing aggravated damage with Resilience, attempting to negate or reduce the damage entirely. Thus, if you suffer two health levels of aggravated damage from sunlight, you can test to reduce one to lethal damage with Resilience, and if successful, you may then attempt to remove that lethal damage with Resistance. You may only attempt this Discipline once on any given source of damage, so if you suffer two or more levels of damage from a single attack, you may only attempt to reduce a single level of damage from that attack.",
            },
            {
                name: "Aegis",
                level: "Advanced",
                cost: 9,
                description: "Like a bar of steel, a mountain, an immutable constant, you resist all dam- age and survive any attack. Only truly monumental and persistent force can ever destroy you completely. Indeed, once the storm of fire and destruction has passed, you rise out of the chaos unscathed. At any point during a turn, you may declare the use of Aegis. You must expend a permanent Willpower Trait or three permanent Physical Traits to activate this Discipline (though these Traits may be re-purchased later with Experience Traits). When you declare Aegis, you immediately revoke any damage that you suffered in the turn, and you take no damage for the remainder of the turn. You may even declare Aegis after you have been “killed,” ignoring the damage that killed you and any other injury suffered in the same turn. If you are “killed,” you must use Aegis in the same turn — once a new turn begins, you cannot revoke any previous damage. Use of Aegis is reflexive; it does not count as an action.",
            }
            
        ],
        description: "All vampires are supernaturally resilient, capable of surviving blows, slashes, bullet wounds and falls with impunity. Some few, however, are even more powerfully resilient, able to shrug off the most severe wounds and even resist the powers of fire and sunlight for a short time. The Discipline of Fortitude represents such resilience, and its mastery al- lows survival of situations that would otherwise cause Final Death in lesser Cainites. The nomadic Gangrel and Ravnos clans, who must survive the rigors of the wilderness and travel, most commonly possess Fortitude. The Ventrue also exhibit this Discipline, often leading their charges into battle while shrugging off terrible attacks. Retests on Fortitude powers use the Survival Ability."
    },
    {
        primary_name: "Melpominee",
        powers: [
            {
                name: "The Missing Voice",
                level: "Basic",
                cost: ,
                description: "Like a ventriloquist, you can throw your voice to any place within your line of sight. However, you do not cause your voice to seem to emanate from there — with The Missing Voice, you actually cause your speech or song to generate from thin air. You can even carry on two conversations simultaneously, for The Missing Voice functions independently of your normal voice. You may use The Missing Voice at any time, as desired. However, if you use The Missing Voice while performing other actions, you suffer a two-Trait penalty on the resolution of challenges due to your split concentration.",
            },
            {
                name: "Phantom Speaker",
                level: "Basic",
                cost: ,
                description: "No longer limited to sending your voice to a place you can see, you can project speech or song to anyone you know. As long as it is night at the subject’s location, you make your voice heard to your target. The words and music of Phantom Speaker are audible only to your target, unless an eavesdropper with at least the Intermediate level of Auspex manages to listen in by defeating you in a Mental Challenge. You must expend one Blood Trait to project your voice for a single turn.",
            },
            {
                name: "Madrigal",
                level: "Intermediate",
                cost: 6,
                description: "The crashing waves of your song carry the force of your own emotions. With inspiring verses, you raise others to the heights of passion; black melancholy afflicts the victims of your works of despair. You must make a Social Challenge against every target that you wish to affect with your Madrigal — you can affect anyone within hearing range, at your discretion. Willpower can be used to retest in defense against this power, as usual for Social Challenges. If you choose to affect multiple people, use a mass challenge as described in mob combat. Anyone who succumbs suffers the effects of an overwhelming surge of emotion, directed by your choice of song. The subjects should roleplay this wave of emotion as long as you perform no action other than singing. You must sing for a full turn for Madrigal to take effect. The player need not actually sing to invoke this Discipline, though players so talented are certainly encouraged to do so.",
            },
            {
                name: "Siren’s Beckoning",
                level: "Intermediate",
                cost: 6,
                description: "Pulling out the roots of turmoil and despair in a subject, you awaken insanity from the soul. Like the legends of faerie singers and mermaids, you can drive your target into desperation with your melodies. You must make a Social Challenge against your target to use the Siren’s Beckoning. If you win, the victim suffers from one randomly chosen derangement. You may carry about a stack of cards with various derangements and allow the victim to choose one at random, or you may have the derangement relate to the song you sang (such as regression for a children’s song or megalomania for a national anthem). This derangement lasts for the rest of the night.",
            },
            {
                name: "Virtuosa",
                level: "Advanced",
                cost: 9,
                description: "Though most Daughters of Cacophony are limited to affecting a single target with hidden speech or insanity, your performance carries your music to as many listeners as you desire. You can extend your powers of Phantom Speaker or Siren’s Beckoning to multiple subjects. You need only expend one Blood Trait to use Phantom Speaker or Siren’s Beckoning on up to five targets at once. If you use Phantom Speaker, every subject hears the same words or music that you project. If you use Siren’s Beckoning, you make a mass Social Challenge against all of the victims at once. In either case, you can only use one power at a time — you cannot use Virtuosa to project speech to some people while singing to others simultaneously.",
            }
            
        ],
        description: "With this Discipline, the very voice of a Cainite is a powerful tool. Inspiring emotion or projecting sound through speech and song, the Melpominee Discipline reflects the incredible mastery possessed by the Daughters of Cacophony. The Greek Muse of tragedy surely reflects in this power, as it can be used both to soothe the mind and to inspire insanity. Some Cainites attribute these sirenlike gifts to a hint of fey madness in the Daughters’ bloodline. The powers of Melpominee function on the very soul, not merely on the flesh. Deaf subjects, or individuals otherwise unable to hear the vampire, can still be affected as long as the singer’s voice reaches to the area of the target. These effects extend from the will of the siren, so they only affect those who are in the hearing range of the singer’s natural voice or Melpominee-projected effects — engineered recordings, microphones, bullhorns, or electronic or mechanical copies cannot. The Daughters of Cacophony consider Melpominee to be their highest art and calling, a reflection of the inward music that moves them. As a result, they do not teach its secrets to outsiders, and indeed other Cainites, who do not hear the cosmic music of the spheres, find development of this Discipline difficult in the extreme. All Melpominee effects use Performance Ability for retests"
    },
    {
        primary_name: "",
        powers: [
            {
                name: "",
                level: "Basic",
                cost: ,
                description: "",
            },
            {
                name: "",
                level: "Basic",
                cost: ,
                description: "",
            },
            {
                name: "",
                level: "Intermediate",
                cost: 6,
                description: "",
            },
            {
                name: "",
                level: "Intermediate",
                cost: 6,
                description: "",
            },
            {
                name: "",
                level: "Advanced",
                cost: 9,
                description: "",
            }
            
        ],
        description: ""
    },
    {
        primary_name: "",
        powers: [
            {
                name: "",
                level: "Basic",
                cost: ,
                description: "",
            },
            {
                name: "",
                level: "Basic",
                cost: ,
                description: "",
            },
            {
                name: "",
                level: "Intermediate",
                cost: 6,
                description: "",
            },
            {
                name: "",
                level: "Intermediate",
                cost: 6,
                description: "",
            },
            {
                name: "",
                level: "Advanced",
                cost: 9,
                description: "",
            }
            
        ],
        description: ""
    },
    {
        primary_name: "",
        powers: [
            {
                name: "",
                level: "Basic",
                cost: ,
                description: "",
            },
            {
                name: "",
                level: "Basic",
                cost: ,
                description: "",
            },
            {
                name: "",
                level: "Intermediate",
                cost: 6,
                description: "",
            },
            {
                name: "",
                level: "Intermediate",
                cost: 6,
                description: "",
            },
            {
                name: "",
                level: "Advanced",
                cost: 9,
                description: "",
            }
            
        ],
        description: ""
    },
    {
        primary_name: "",
        powers: [
            {
                name: "",
                level: "Basic",
                cost: ,
                description: "",
            },
            {
                name: "",
                level: "Basic",
                cost: ,
                description: "",
            },
            {
                name: "",
                level: "Intermediate",
                cost: 6,
                description: "",
            },
            {
                name: "",
                level: "Intermediate",
                cost: 6,
                description: "",
            },
            {
                name: "",
                level: "Advanced",
                cost: 9,
                description: "",
            }
            
        ],
        description: ""
    }
]

const seedDisciplines = () => Discipline.collection.insertMany(disciplinesData);

module.exports = {seedDisciplines};