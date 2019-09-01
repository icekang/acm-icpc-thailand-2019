<template>
  <div class="px-5 mx-5 my-5">
    <v-btn v-on:click="ruleType = 'online'" color="#6b0000" dark depressed>Online</v-btn>
    <v-btn v-on:click="ruleType = 'regional'" color="#6b0000" dark depressed>Regional</v-btn>
    <div v-if="ruleType === 'online'">
      <div v-for="(item, index) in online_rules" :key="index">
        <RulePart :title="item.title" :introduction="item.introduction" :body="item.body"></RulePart>
      </div>
    </div>
    <div v-if="ruleType === 'regional'">
      <div v-for="(item, index) in regional_rules" :key="index">
        <RulePart :title="item.title" :introduction="item.introduction" :body="item.body"></RulePart>
      </div>
    </div>
  </div>
</template>

<script>
import RulePart from '../components/RulePart.vue'

export default {
  name: 'Rule',
  components: { RulePart },
  data() {
    return {
      ruleType: 'online',
      online_rules: [
        {
          title: 'ICPC Regional Rules for 2019 Online',
          introduction:
            'Competition rules are based on ACM-ICPC Regionals and World Finals. The rules are partly adjusted to better suit the competition area. Competitors and coaches should be well aware and strictly conform to the rules in order to ensure equality and fairness of the competition.',
          body: [
            {
              head: 'Team requirement',
              texts: [
                {
                  text:
                    'Each team must contain a coach (a follower allowed) and 3 competitors from the same institute. If the above condition is not met, the team will not be ranked and will not participate in any rewards and rights to advance in the competition. However, the team can still compete if approved by competition organizers.'
                }
              ]
            },
            {
              head: 'Competition',
              texts: [
                {
                  text:
                    'The competition is about writing a program to solve problems (problem statements are in English). The program must be written in either C, C++, or Java programming language. The duration of the competition is 3 hours. Each team can solve the problems in any order; the program for each problem can be written in any of aforementioned programming languages. The team must consist of 3 students from the same institute.'
                }
              ]
            },
            {
              head: 'Competition environment',
              texts: [
                {
                  text:
                    'Each team is allowed to bring no more than 3 books e.g. text book, dictionary, magazine (also applicable with copies of a book). Document with no more than 100 pages and stationary are also allowed. All of the mentioned must be submitted before competition. Anything that has not been submitted before competition is not allowed in the competition.'
                },
                { text: 'Other belongings are not allowed in the competition room.' },
                {
                  text:
                    'All communication and electronic devices e.g. phone, calculator, MP3 player, flash drive, CD, iPod, are not allowed.'
                },
                {
                  text:
                    'Each team must use the provided computers and devices. Personal computers or devices are not allowed.'
                },
                {
                  text:
                    'Each team is not allowed to communicate with anyone other than its team members, competition organizers, and proctors.'
                },
                {
                  text:
                    'During competition, each team member can ask proctors to go to the provided restroom with supervision from proctors no more than 15 minutes at a time.'
                },
                { text: 'Each team should not be too loud or interrupt other teams.' },
                { text: 'Each team is not allowed to use the Internet or attempt to use the Internet.' }
              ]
            },
            {
              head: 'During competition',
              texts: [
                {
                  text:
                    'Each submission to the problem is called a “run.” When a run is submitted, the system will verify if the run is correct (Yes/No). Each team must login to PC2 system with the provided account at all time during the competition. If an attempt to login to the account of other team is found, competition organizers will consider disqualifying the team. If an anomaly in problem statements is observed, a clarification request can be submitted on PC2 during competition. Using the instructions provided during the competition, each team can see live scoreboard which tells the current ranking of every team. Live scoreboard will also be shown to coaches in the provided room. The live scoreboard will be frozen during the last 45 minutes of the competition. During that time, the competitors will still get judge’s responses as usual.'
                }
              ]
            },
            {
              head: 'Judgement',
              texts: [
                {
                  text:
                    'All teams will be ranked based on the number of problems solved. If the number of problems solved is equal, the total time (the summation of time used for the solved problems including penalty) is considered next. The time used in calculation is the time of the first accepted run of each problem, and penalty time is calculated by the number of rejected runs on each problem, 20 minutes per run. For unsolved problems, penalty time will not be taken into calculation. If both number of problems solved and total time are equal, the time of the last solved problem without penalty is considered. If the time is still equal, the previously solved problems will be considered subsequently. If an attempt to cheat is observed, competition organizers will consider disqualifying the team. It there is any complaint about the competition, the complaint must be done within 30 minutes after competition ends. If any unexpected circumstance happens in the competition, competition organizers will consider case by case, and the decisions of competition organizers are final.'
                }
              ]
            }
          ]
        }
      ],
      regional_rules: [
        {
          title: 'ICPC Regional Rules for 2019 Regionals',
          introduction:
            'The following has been excerpted from ICPC Regional Rules for 2019 Regionals (https://icpc.baylor.edu/regionals/rules)',
          body: [
            {
              head: 'Registration',
              texts: [
                {
                  text:
                    'If a team wishes to be able to qualify for the ICPC World Finals, then before competing in ANY regional qualifying event, the coach and all team members must be fully registered in the ICPC Registration System.  A qualifying contest is one that allows teams to be promoted to a higher level and which is supervised by faculty.  An online contest which is unsupervised may not be classified as a qualifying contest.  Registration may not be done retrospectively.  Incomplete registration or circumvention that leads to incomplete or false data is grounds for immediate disqualification.'
                }
              ]
            },
            {
              head: 'Mission',
              texts: [
                {
                  text:
                    'The ICPC, the “International Collegiate Programming Contest”, is an extra-curricular, competitive programming sport of the universities of the world.  ICPC competitions provide gifted students with opportunities to interact, demonstrate, and improve their teamwork, programming, and problem-solving prowess.  The ICPC is a global platform for academia, industry, and community to shine the spotlight on and raise the aspirations of the next generation of computing professionals as they pursue excellence.'
                }
              ]
            },
            {
              head: 'Introduction',
              texts: [
                {
                  text:
                    'The contest is a multi-tiered team competition for students representing institutions of higher education.  The tiers range from local contests to the highest level Regional Contest from which teams advance to the ICPC World Finals.  Teams have the right to advancement only for qualifying contests.  The hierarchy of qualifying regional contests is shown in the ICPC Registration System.  At any level, teams may be invited to advance to the next level using wildcards.'
                },
                {
                  text:
                    'The ICPC World Finals is typically held between April and June.  The date of the ICPC World Finals is published no later than August 1 before the date of the ICPC World Finals.'
                }
              ]
            },
            {
              head: 'Organization',
              texts: [
                {
                  text:
                    'The ICPC is organized according to the ICPC Policies and Procedures.  The Executive Committee, chaired by the Executive Director, sets the policy and general rules for the conduct of the contest.  The Executive Director is solely responsible for interpreting the rules and for ruling on unforeseen situations. '
                },
                {
                  text:
                    'The ICPC is affiliated with the ICPC Foundation.  The ICPC Executive Director is an officer of the ICPC Foundation which is responsible for sponsorship, fundraising, host agreements, alumni outreach, and operational matters in compliance with the ICPC Policies and Procedures within the Constitution and By-Laws of the ICPC Foundation. '
                },
                {
                  text:
                    'The ICPC International Steering Committee is responsible for establishing regional contest rules, policies and guidelines.  They oversee the conduct of regional contests, resolve regional appeals, rule on international issues, recommend ways to make the contest more accessible and attractive to international participants and review variances in regional rules.  There are two standing subcommittees, the Appeals Committee, and the Eligibility Committee.'
                },
                {
                  text:
                    'All ICPC Regional Contests are organized by the ICPC Policies and Procedures.  Each Regional Contest Director (RCD) is charged with executing specific regional contests by these ICPC Regional Rules, the ICPC Policies & Procedures, and ICPC guidelines. '
                },
                {
                  text:
                    'Each regional contest has the opportunity to vary the rules to accommodate differences in educational systems and host computing facilities.  Such rules do not supersede the ICPC Regional Rules or the ICPC World Finals Rules.  These contest-specific Rules and other helpful information must be posted on the regional website.'
                }
              ]
            },
            {
              head: 'Localization',
              texts: [
                {
                  text:
                    'The language of the Contest is English.  All written contest materials will be in English.  Additional languages may be used in regional contests.  Where an English term may have multiple interpretations, these must be defined to ensure all contestants have clarity of meaning.'
                }
              ]
            },
            {
              head: 'Team Composition',
              texts: [
                {
                  text:
                    'A representative of the sponsoring institution of higher education, typically a faculty member, must be designated and registered as the team coach.  They must certify the eligibility of contestants and be the official point-of-contact with the team before and during contest activities.  A team may only have one registered coach, and that coach cannot also be a contestant.'
                },
                {
                  text:
                    'The coach must fully register teams in the ICPC Registration System within the time set by the regional rules which, for all qualifying Regional Contests, is no later than 7 days before the contest.  A team is not eligible to compete in the regional contest until the regional contest director has accepted the team in the web registration system.  Teams failing to comply with any of these requirements will be ruled ineligible to compete.  Only registered reserves may be substituted for contestants.  Such substitutions must be entered in the ICPC Registration System by the regional contest director before the contest begins.  A reserve can only be substituted for a contestant before the first qualifying contest.'
                },
                {
                  text:
                    "Each team consists of three contestants who are eligible to compete in the ICPC World Finals as described under Advancing to the ICPC World Finals in the Regional Rules.  The team's contestants must satisfy all eligibility requirements.  For more complex decisions, the Eligibility Decision Tree can be used. (https://icpc.baylor.edu/download/regionals/rules/EligibilityDecisionTree-2019.pdf)"
                }
              ]
            },
            {
              head: 'Basic Eligibility Requirements',
              texts: [
                {
                  text:
                    "An eligible student must be willing and able to compete in the ICPC World Finals.  In particular, a student who requires a visa to study at the team’s institution must be able to gain a visa to travel to the ICPC World Finals plus be able to return to the institution's location after the Finals.  A student must be enrolled in a degree program at the team’s institution with at least a half-time load.  This rule is not to be construed as disqualifying co-op students, exchange students, students serving internships, or extramural students.  A student may compete for only one institution during a contest year."
                },
                {
                  text: 'A student who has competed in two ICPC World Finals is NOT eligible to compete.'
                },
                {
                  text:
                    'A student who has competed in qualifying regional contests during five different contest years is NOT eligible to compete.'
                }
              ]
            },
            {
              head: 'Period of Eligibility',
              texts: [
                {
                  text:
                    'A student who meets the Basic Requirements and FIRST began post-secondary studies in 2015 or later is eligible to compete. A student who meets the Basic Requirements and was born in 1996 or later is eligible to compete.  The eligibility status is determined at the first qualifying contest.'
                }
              ]
            },
            {
              head: 'Extending the Period of Eligibility',
              texts: [
                {
                  text:
                    'A coach may petition the ICPC Eligibility Committee (manager@icpc.global) at least three weeks before the regional contest, to extend the Period of Eligibility for a student whose full-time studies have been interrupted or extended.  (This includes military or civilian service, illness, any work, other studies, or personal reasons).'
                },
                {
                  text:
                    'The coach must demonstrate that such an extension would not provide an unfair advantage to the team.'
                },
                {
                  text:
                    'A petition will normally be approved if the student meets the Basic Eligibility Requirements and has not completed more than the equivalent of eight semesters of full-time STEM study as of the date of the regional contest.'
                },
                {
                  text:
                    'The ICPC Eligibility Committee will render a decision within five days of receiving the petition.'
                }
              ]
            },
            {
              head: 'Where to Compete',
              texts: [
                {
                  text:
                    'Contests are partitioned geographically into “ICPC Regions”, and every institution is assigned a home ICPC Region.  An institution’s teams may compete in only one regional contest advancement path to the ICPC World Finals.'
                },
                {
                  text:
                    'An institution may request to move to a different home ICPC Region for a given year for a valid reason.  The team coaches from the institution must submit such a request to the Director of Regional Contests (DRC) (roy.andersson@icpc.global), who will approve the request only if the decision is unanimous among all affected Directors.'
                }
              ]
            },
            {
              head: 'Guest Team Participation',
              texts: [
                {
                  text:
                    'An RCD director may invite guest teams who are not eligible to advance toward the World Finals, to compete in a regional contest.  An eligible student may compete on a guest team in at most one additional regional contest per year.  Guest teams must be registered as such before conducting the contest.'
                }
              ]
            },
            {
              head: 'Regional Contest Attendance',
              texts: [
                {
                  text:
                    'All team members must attend all contest activities as specified by the regional contest director for that region.  The coach is expected to attend or be available by phone or similar during contest activities.  Failure to attend any of the designated contest events will result in automatic disqualification and forfeiture of any scholarships and prizes.'
                }
              ]
            },
            {
              head: 'Conduct of a Regional Contest',
              texts: [
                {
                  text:
                    'Solutions to problems submitted for judging are called runs.  Each run is judged as accepted or rejected, and the team is notified of the results.'
                },
                {
                  text:
                    'Public notification of accepted runs may be suspended at an appropriate time (typically during the last hour of the contest) to keep the final results secret.  A general announcement to that effect will be made during the contest.  Notification of rejected runs will continue to be made to the team until the end of the contest.'
                },
                {
                  text:
                    'A contestant may submit a claim of ambiguity or error in a problem statement by submitting a clarification request.  If the judges agree that an ambiguity or error exists, a clarification will be issued to all contestants.'
                },
                {
                  text:
                    'Contestants are not to converse with anyone except members of their team and personnel designated by the regional contest director.  Systems support staff may advise contestants on system-related problems such as explaining system error messages.'
                },
                {
                  text:
                    'While the contest is scheduled for a particular time length (typically five hours), the regional contest director has the authority to alter the length of the contest in the event of unforeseen difficulties.  Should the contest duration be altered, every attempt will be made to notify contestants in a timely and uniform manner.'
                },
                {
                  text:
                    'A team may be disqualified by the regional contest director for any activity that jeopardizes the contest such as dislodging extension cords, unauthorized modification of contest materials, any activity that may knowingly or unknowingly adversely impact another team or distracting behavior.'
                },
                {
                  text:
                    'At least six problems will be posted.  So far as possible, problems will avoid dependence on detailed knowledge of a particular applications area or particular contest language.'
                }
              ]
            },
            {
              head: 'Scoring of a Regional Contest',
              texts: [
                {
                  text:
                    'A problem is solved when it is accepted by the judges.  The judges are solely responsible for accepting or rejecting submitted runs.  In consultation with the judges, the Regional Contest Director determines the winners of the regional contest.  The regional contest director and judges are empowered to adjust for or adjudicate unforeseen events and conditions.  Their decisions are final.'
                },
                {
                  text:
                    'Teams are ranked according to the most problems solved.  For awards, or in determining qualifier(s) for the ICPC World Finals, teams who solve the same number of problems are ranked by least total time.  The total time is the sum of the time consumed for each problem solved.  The time consumed for a solved problem is the time elapsed from the beginning of the contest to the submittal of the first accepted run plus 20 penalty minutes for every previously rejected run for that problem.  There is no time consumed for a problem that is not solved.'
                },
                {
                  text:
                    'It is the responsibility of the Regional Contest Director to specify any additional tie-breakers.  Tie-breaker policies must be announced to contestants before the contest begins.'
                }
              ]
            },
            {
              head: 'Regional Championships',
              texts: [
                {
                  text:
                    'The regional contests are divided into eight championship areas; the Africa & Arab Championship, the Asia East Championship, the Asia Pacific Championship, the Asia West Championship, the European Championship, the Latin America Championship, the Northern Eurasia Championship, and the North America Championship.'
                },
                {
                  text:
                    'The highest level Regional Contest may be a Championship Contest, and thus awarding the winning team the title Champions (The Africa & Arab Champions etc). Team composition and requirements rules for a Championship contest are to be the same as for the World Finals. A Championship contest should be held no later than January 31.'
                }
              ]
            },
            {
              head: 'Regional Contest Computing Environment',
              texts: [
                {
                  text:
                    'The programming languages of the regional contest will include C and C++.  Additional programming languages may be used.  The programming languages of the ICPC World Finals are Java, Kotlin, Python and C/C++.  Before the ICPC World Finals, the judges will have solved all problems in Java and C/C++.'
                },
                {
                  text:
                    'Each team will use a single workstation.  The regional contest director is responsible for determining that teams have reasonably equivalent computing resources.'
                },
                {
                  text:
                    "Each Regional Contest Director determines whether contestants may bring materials for use during the contest.  Please see the specific regional rules at the ICPC Regional Contest Web Site.  At the ICPC World Finals, no printed materials or electronic devices may be brought into the contest area.  On-line reference materials will be made available as described in the Programming Environment Web Site (https://icpc.baylor.edu/worldfinals/programming-environment).  Each team will be permitted to provide a PDF of up to 25 pages of notes within the limits described during Team Certification.  Three copies will be printed and placed at the team's workstation for use during the ICPC World Finals."
                }
              ]
            },
            {
              head: 'Complaints, Appeals, and Remedies',
              texts: [
                {
                  text:
                    'If irregularities or misconduct are observed during the contest, team members or coaches should bring them to the attention of the contest officials so that action may be taken as soon as possible.  After the conclusion of the contest and the results have been made public, coaches may file complaints or appeals as follows:'
                },
                { text: 'Within 1 day' },
                {
                  text:
                    'The coach may file a complaint by sending an email containing a text message with no enclosures to the Contest Manager (manager@icpc.global).  The Contest Manager will forward the complaint to the Regional Contest Director, supervising Regional Contest Directors, and the Director of Regional Contests, copying the coach.'
                },
                { text: 'Within 2 more days' },
                { text: 'The RCD shall respond to the complaint.' },
                { text: 'Within 1 more day' },
                {
                  text:
                    'The coach may file an appeal by sending email to the Contest Manager who will forward the appeal to the Appeals Committee copying the coach, RCD and supervising RCDs.'
                },
                { text: 'Within 2 more days' },
                {
                  text:
                    'The Appeals Committee will investigate the circumstances of the appeal and notify the coach, RCD and the supervising RCDs.'
                },
                { text: 'This process is governed as follows:' },
                {
                  text:
                    'The results of the regional contest are not final until the complaints and appeals process has run its course.  Only coaches may file complaints and appeals.  An appeal must be based on one or more of the following circumstances: violations of the Rules, misconduct by teams, or gross misconduct by contest officials with the intent to harm.  The decisions of the judges are final.  Specifically, a decision on a problem submission MAY NOT be appealed.  The Appeals Committee overturns decisions only under extraordinary circumstances.  The decision of the Appeals Committee is final.  No additional finals invitations will be given to remedy a complaint. All complaints will be acknowledged.'
                },
                { text: 'The appeal will be automatically rejected if the above procedure is not followed.' }
              ]
            },
            {
              head: 'Advancing to the ICPC World Finals',
              texts: [
                {
                  text:
                    'The highest level Regional Contests advance teams to the ICPC World Finals.  Additional teams who competed in the highest level of regional contests may be invited to the ICPC World Finals as wild card teams.'
                },
                {
                  text:
                    'Teams qualify to advance to the ICPC World Finals through Regional Contests and by satisfying all rules posted in The Rules of the ICPC World Finals. Specifically:'
                },
                {
                  text:
                    'To qualify for the ICPC World Finals, the coach and all team members must be fully registered in the ICPC Registration System BEFORE competing in ANY regional qualifying event.  Incomplete registration or circumvention that leads to incomplete or false data is grounds for immediate disqualification.'
                },
                {
                  text:
                    'Only one team from a given institution may advance to the ICPC World Finals.  No team member on the qualifying team may have competed as a contestant in two previous ICPC World Finals.'
                },
                {
                  text:
                    'The coach of a qualifying team is the point-of-contact before and during ICPC World Finals activities.  The coach must complete certification at the Team Certification Web Site within five (5) days of notification.  Qualifying teams will be invited by email within one day of completing certification.'
                },
                {
                  text:
                    'Qualifying teams requiring visas must initiate the process of applying for visas within ten days of being issued an invitation.  Teams failing to comply with any of these requirements will be ruled ineligible to compete in the ICPC World Finals.  Upon completion of these requirements, a qualifying team will be advanced to the ICPC World Finals.'
                },
                {
                  text:
                    'A team advancing to the ICPC World Finals will be comprised of the same three members as when it qualified.  If a team member is unwilling, unable or unfit to compete in the ICPC World Finals, the coach must notify the ICPC Manager promptly.  A team member who is unwilling or unfit to compete in the ICPC World Finals will be disqualified from further ICPC competitions.  The team member may appeal disqualification to the Appeals Committee.'
                },
                {
                  text:
                    'At on-site registration, participants must provide a picture ID (passport, drivers license, etc).  Contestants must show proof of enrollment at the university during the term of the regional contest at which they qualified.  A letter on university stationery with the signature of a university official accompanied by an English translation is sufficient.'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>
h1 {
  font-size: 5rem;
  color: #6b0000;
  font-family: Playfair Display, Times, serif;
}
p {
  font-size: 1.3rem;
}
li {
  font-size: 1.2rem;
}
.display-1 {
  color: #6b0000;
}
</style>