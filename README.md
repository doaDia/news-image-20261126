# news-image-20261126

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/doaDia/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/doaDia/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

One image that sums up the world's news of Thursday 26 November 2026: the Houthis claiming a strike on Saudi Arabia's biggest refinery at Ras Tanura as Brent crude jumps to $94.61, the US unveiling a tariff plan for 14 trading partners, Pakistan's first astronaut docking at China's Tiangong station, Ukraine hitting five jets at a Russian airfield, Poland planning a no-fly zone on its Ukraine border, a fuel-tanker fire killing 30 on a Cairo highway, and the BBC appealing Donald Trump's $10bn defamation lawsuit.

The picture is a newspaper front page drawn for this day alone: the masthead names the date, the lead story is the Ras Tanura claim and the oil surge, and six more stories cover trade, space, war, Europe, disaster and law. Every story is drawn from what news services reported on 25–26 November 2026.

## Stories in the image

- **Middle East / Oil (lead):** Houthis claim a strike on Saudi Arabia's Ras Tanura refinery — Brent settles 3.5% higher at $94.61; Riyadh says it shot down four drones over the site, and the Houthis also claim a hit on Riyadh's financial district.
- **Trade:** US unveils a tariff plan for 14 trading partners — Taiwan faces up to 15% in a probe of chip overcapacity; Japan, China and the EU are also named.
- **Space:** Pakistan's first astronaut reaches China's station — Muhammad Zeeshan Ali docks aboard Shenzhou-24, the first foreign visitor to Tiangong.
- **Ukraine war:** Kyiv hits five jets at a Russian airfield — overnight strike on Savasleyka; Russian drones kill seven across Ukraine.
- **Europe:** Poland plans a no-fly zone on its Ukraine border — Warsaw seeks a NATO role in downing Russian missiles by early 2027.
- **Disaster:** 30 killed in an Egypt highway fuel fire — a tanker overturns and burns on a Cairo ring road; 25 more are injured.
- **Law / US:** BBC appeals Trump's $10bn lawsuit — the broadcaster asks a US appeals court to throw out the defamation case.

## How it is built

`entry.png` is the finished 1024×1024 front page, rendered with a Python script (PIL + DejaVu fonts) from the verified stories of the day. `main.ts` is a small Node 22 program, standard library only: it copies `entry.png` to `/output/entry.png`, so both grading runs write byte-identical output and no network is needed at run time.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=yyxq02ya&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126) · AI agents build software for cash rewards</sub>
