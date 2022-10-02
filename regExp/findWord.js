/* 
https://www.hackerrank.com/challenges/find-a-word/problem?isFullScreen=true
*/

function processData(input) {
    //Enter your code here
    const lines = input.split(/\n/);
    const numberOfSentences = parseInt(lines[0]);
    const numberOfWords = parseInt(lines[numberOfSentences + 1]);
    for (let i = 1; i < numberOfWords + 1; i++) {
        let myWord = lines[numberOfSentences + 1 + i];
        let myRegExp = new RegExp(`^${myWord}[^a-zA-Z0-9\_]{1}|[^a-zA-Z0-9\_]{1}${myWord}[^a-zA-Z0-9\_]{1}|$[^a-zA-Z0-9\_]{1}${myWord}`, "g")
        let word = input.match(myRegExp);
        console.log(`${myWord}: ${word.length}`);
    }
} 

const input = `20
wristattach(explode least'attach'a analyseattach attach(bacteria yardattach(romantic unload(attach attach-disturb attach)quote name.attach neat'attach
abandoned,attach listen.attach former'attach)material walking.attach,define attach'temporarily summary(attach lemon(attach heavily-attach_blame carpet'attach clap-attachoddly
moon-must argue.moon'between i_moon previously-moondream moonwhenever worth_moon,atom traffic)moon pet(moon presence-moon-myself moon)problem
moon'wallet ancient-moon)go a-moon(series moon(rude signal(moon(term solidmoon-private identify-moon industry,moon-company wrapping-moonanother moon'appropriate
an.attach,unsuccessful attach-opposition opposed-attach attach(shell permanent-attach)seat slice.attach-game attachsugar attach(calm oppose(attach)protest sweat,attach
acceptable(attach)primarily occasionallyattach.accurately sore)attach,nicely attach-shelter unkind)attach-apart attach'clerk rather(attach'concentrate attach-neighbour neckattach(used music'attach-resolve
moon-captain faithfully.moon moon,truly moon,envelope introduction(moon moon.angle moonmobile punishmoon moon_friendship beak_moon)report
moon.abandon radio-moon(enemy moon,weigh moon(upon moon-leader assume(moon_switch pleasing-moon farther'moon tunemoon moon-eventually
attach.mouth generate)attach journey'attach.assistance sexual-attach,chase nervous-attach resolve'attach-kilometre conflictattach'bitter illattachonion exercise'attachvertical generation,attach'whereas
attach'department appearance,attach'calmly ideally,attach)equivalent attach.produce initially-attachcombine honestlyattach tiny'attach)assistance soap'attachdemonstrate stick'attach_create shift,attach)skill
accidentally_attach(belief owner_attach occur'attach,late kill-attach sufferattach strength(attach introduction,attach spray(attach comfortable)attach attachplenty
moon)landscape moon'pass moon)pepper encourage'moon(finally moon,opening concerning.moon horse(moon.packaging moon)cover valuable'moon moon.smoothly
attach)racing attach)scientific attach-rubbish tomato-attach reply(attach,toilet sailing'attach stop-attach-grow attach(printing attach)chapter attach.sum
constant'moon hole'moon hook.moon faint)moon_strange our_moon(net moon_emotion write)moon,could intelligence,moon(play musical.moon(swelling uniform-moon-appreciate
want'attach attach,vast means_attach dissolve,attach.stay stamp'attach.usually attach-gear massive.attach'cycling failure)attach deliberate'attach attach'building
attach_quick fair(attach-could attach)mouth surname)attach outstanding-attach attach)request attach(awkward station,attachleave annually_attach-something non.attach
attach(proportion attach_good attach,staff waste_attach attach(l producerattach.play attach.challenge improve)attach shall-attach aircraft_attach_artificially
proof(moon,easily switch(moonneed delight)moon bet.moon,fan moon(medicine normoon-finance moon,concept cultural.moon moon.increasingly express.moon
item-moon moon,noisily moon(fame moon,investigate border_moon moon.debt differently(moon leading(moon interestedmoon moon.experience
such'attach'dust typeattach fight(attach)contribute lively.attach attachstair check)attach_saturday be_attach'spicy uncomfortable,attach habitattach attach-custom
2
moon
attach`;

const input1 = `60
colourfuture saturday.future face_future(anxiety obtain.future surroundings'futurerefrigerator alone)futurecomparison wine-future,tight futureimpatient bodyfuture excite(future(grandfather
other(stick star,stick stick)critical stick(debt cheek_stick.representative serious(stick stick(sticky stick)chew dress)stick go_stick(furniture
occupy-tip repeat_tip pace)tip,riding catch(tip protect)tip dirt(tip(imagination commitment-tip(infected altogether.tip politically'tip anniversarytip
secure,tip board(tip)fever pile(tip_alphabetically remote)tip aloud(tip defend'tip_religious bottletip feeltip_unhappiness tip'swallow tear.tip
channel(hobby bus)channel(drunk soul(channel channel,take pour_channel-removal order(channel_outline channel.mirror channel-breakfast creature(channel,smoking toilet_channel-cd
cleanchannel hotel.channel govern'channel channel-check inquiry.channel)eat estatechannelconsumer channeluniverse crop-channel(qualification massive,channel parliamentchannel
tear(fund violently,tear)security sillytear(minimum property-tear_acquire steal(tear tear(include grow'tear)court tear'mountain tear'block tear,persuade
enjoyable(tear(usually climbing-tear jumptear cause.tear,file peace.tear depressed(tear envelope)tear-owe room_tear.pleasure choose_tear outer_tear,machinery
mine)realize beach)realize,take realize-gold camera_realizemouse anyone_realize-chemical wounded-realize'sheep superior_realizeoccupied construct(realize base,realize realize-hospital
fighting'channel industrial)channel-instead channel.traffic poetry-channel_bar channelnature cow_channel,in channelwashing channelmanner channel,root stay'channel(dollar
future)aircraft status)future continuously)future wild'future'land bore_future float.future_bandage absent'future'model ability)future future(a definition'future)admit
unconscious_tear oddlytearmood basic.tear tear.accuse tear-knitting tear.instead daily)tear extraordinary'tear.downwards tear-ultimate thursdaytear
divide)realizespring disappointed(realize realizefebruary realize'visit till'realize populationrealize realize.offer reform.realize-get himself,realize.window word-realizedressed
honestly)realize'nowhere invest)realize(into realize.contribute scared,realize sound-realizedue favour)realize realizeall includingrealize.purely camprealize colleague'realize.elbow
furnituretear.totally tear.tomato tear,guide advice_tear_injured season'tear sudden,tear tonight.tear_restricted old_tear,curve tear_upon tearsession
futureconfront future)i future(spare northern,future(elegant future'hang future.improvement milligram)future.vote future(modern boat,future'wrapping photography,future
in'realize realize-blonde underwaterrealize.magazine realize(pleasure bake_realize seem(realize.chart by-realize realize-entrance realize.regulation damp-realize
artistic'realize)argument opportunity_realizewillingness realize)everything realize.equally realize'analysis cancel.realize-confine idea'realize friend,realize,cellphone realize-youth re)realize
tip'power article,tip-fridge tip)television impacttip effective-tip spacetipdisturbing tip'oh tip,fun prisoner.tip.packet noisetiplaw
stick.attractive somebodystick stick'new throat.stick,deep stick(outdoors stick.km may.stickexclude stick,arrangement stick(deeply stick(ultimately
contract(stick weekend,stick,shell targetstick stick)labour cottage-stick(equal sticksincere discuss-stick debt_stick relation)stick put_stick
victory,stick stick.employment loudly_stick stick.normally enter)stick_ideally contract)stick-poetry facility,stick fever(stick stick.delivery failure'stick
response(stick(access stick'blonde stick_judgement stickloudly a'stick silkstick,worship danger,stick cigarette)stick.everywhere stick)war stick-hero
minute,tear-cousin temporarily_tear determined,tear greytear tear'interrupt tear(profession goodbye)tear steady)tear(restricted employer,tear tear-extent
jewellery(future)furniture expose,future,govern future)of future(pronounce future-big future(crazy mental'future'ingredient work,future pass_future(generous step,future
establish-tip_humour small-tipmidday tip.against tip.breakfast occasionally.tip chequetip'phone hard)tip artificiallytip tip(employment because'tip.grocery
remarkably_stick miss'stick similarstick seat,stick(zero mind.stick.imagine joy'stick,wave yellow'stick)sudden wake.stick stick,really stick,preference
wife-realize pop)realize'sight glass)realize realize.aid realize-stair undo,realize realize.occur feel_realize,odd display'realize realize,represent
in'stick)passing east-stickdriver stick-admit stick-hunt each)stick.represent professor_stickgrandchild working-stick(paint decorative(stick)advertise stick(weather unlike(stick
mentally'tip(ask tip,exaggerate label)tip arrow)tipsock tip'look tip_euro tip)engineering success(tip tipdead market_tip
educate(tip rush,tip tip,stair tip)class proceed.tip tipfreedom display)tip.recall ingredient-tip pick_tip(increasingly tip_convince
taste(tear cow)tear'an tear.grateful practical.tear tearitself tear.disk latest)tearclub tearlook senator,tear instead(tear
tear(continue emotional'tear tear(emphasize spice'tear indoors.tear tear_resist crushtear.morally tear.unemployment achieve,tear institution,tear_low
tear.machinery tip_tear_deserted diet_tear familiar'tear)swear clothes(tear tear-innocent tear,equipment tear,spoon tear_none creature'tear
stick.membership stick_kill counter.stick'continue our,stick movie,stick sit,stick_something stick-importance fast.stick admiration_stick.east removal'stick-unable
tear(snow litre_tear'attention rain)tear,underground alarm.tear(impressed insist_tear triangle-tear tear_pocket saturday.tear cycling.tear,reply behalf'tear
tear-trick hotel)tear(half educate.tear(police tear-cancer independent)tear tear.quiet offend-tearmost tearindustrial initiative(tear pink_tear
sail.futurelucky futuremidday future(each accompany)future)singing future-attractive define,future neat,future future-guess on(future_desk criticismfuture
quite_stick)fear stick.measure classic(stick varied_stick-division race)stick illustrate.stick)unwilling tonne-stick stickbreak common(stick phrasestick
association-tip switch,tip'sadness have)tip concentrate-tip tipus tip-element fishing_tip(breast offencetip.irritating tip,text sharply_tip
july)channel a,channel.other preparation(channel,upwards extensive_channel-collect the_channel fearchannel step,channel belong(channel-good unlike(channel channel-practical
realize)injured realize(access realize(lunch adjust-realize'beard row-realize,connection finely(realize(needle weight)realize institution_realizealongside breed_realize'preserve in.realize
tipwelcome closet-tip.self fan-tip tip(onto visitor.tip temperature_tip classroom,tip tip.representative tip,pick surprising)tiplayer
stick)president fame)stick reachstick.guest specific(stick'pause rarely'stick'flavour noticestick earth'stick frozen(stick residentstick.grand standstick(birth
unpleasantrealizepilot realize(mix realize,degree coat)realize realizesuit atmosphere_realize self,realize pick,realize,the runnerrealize violence,realize
future(file disapprovefuture_environment priest-future future,bath future(pull future'competition future(throw future(north interpretationfuture,secretary boss'future
stick(and stick)photocopy stick)reserve tiestick stick.which stick,shall island,stick substantial)stick stick_hungry stick,mixed
realize-hungry realize_none realize)anxiously burn_realize)skilfully realizeengineer castle(realize continent,realize(far failure(realize sum,realize league'realize_bin
tip_exactly blame)tippowerful tip,justice tip.your singer)tip tip,amazing knee'tip tip,original ridetip flying-tip
tip,pose cooker_tip finger,tip tip,deserve purple,tip tip_hurry tip,expose bit-tip.drama tip-insult crazy'tip
enter.tearplan bound.tear reform,tear,lie tear,approximate tearrequest curiously.tear sign.tear)control tear,sample ctear approve'tear
stick,brain unwilling'stickacross stick-item takestick stick(already flavour,stick)teacher stick_armed stick'intended stick_less stick)knee
victory)channel.ok grandsonchannel channel,automatically tomato'channel)deliver enthusiasm)channel_distance channel.before yours)channel,account channel(hard once'channel channel(often
pronounce_channel myself)channel sticky,channelwater channel)beat channel'ability host,channel.nurse engage_channel surroundings'channel channel,lie idea.channel
future)dinner future'boss always.futurewind sympathy)future-overcome future_toe futureupset future,diet hungry_future steerfuture_relate worshipfuture'machinery
realize.infect weekly.realize_difficult realize-gift company.realize eat-realize.diagram previously-realize reward_realize inevitable-realize formal'realize rerealize
potentially-tip)oppose devoted_tip(june jacket_tip(voice tip)last mom(tip.ridiculous certainly(tip tip(go plus_tip interpret)tip.wild lacking'tip
studio.channel element-channel range-channel(outstanding channelsurprise stair.channel reckon(channel,bent dear(channel quit-channel channel_anything channel'weapon
public_stick-the stick_rounded millimetre.stick(initiative mall(stick opposed_stick,give state-stick stick(unwilling explanation'stick crucial(stick stick.anger
tear'generate faucettear(switch sack,tear tear(autumn stonetear descriptionteartogether tear)km court'tear tear)imagination tear-irritating
6
tip
channel
tear
stick
future
realize`;

console.log("input");
processData(input);

console.log("input1");
processData(input1)

