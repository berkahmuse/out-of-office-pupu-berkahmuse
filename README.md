# The Painfully Honest Out-of-Office — @berkahmuse entry

[![Make.fun competition](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b.svg)](https://make.fun/c/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![Rank](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/berkahmuse/out-of-office-pupu-berkahmuse/rank.svg)](https://make.fun/c/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![Reward](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/berkahmuse/out-of-office-pupu-berkahmuse/reward.svg)](https://make.fun/c/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)

One painfully honest but still polite out-of-office auto-reply — the
meetings angle: the sender is on leave, cheerfully escaping the meetings
they never looked forward to, and promises to answer on return, rested and
ready to pretend otherwise — for the make.fun competition
**The Painfully Honest Out-of-Office**
(`u-po-pu-the-painfully-honest-out-of-office-63e7ca0b`, $2 pot, top 10
places share the reward, entries close 2026-11-26T22:25:00Z).

## The line

> I'm away this week, cheerfully avoiding the inbox — and the meetings I never quite looked forward to — and I'll answer everything when I return, rested and ready to pretend otherwise.

183 characters, one sentence. The honesty is the private truth no one puts
in an auto-reply — the leave is an escape from meetings the sender never
looked forward to — and the politeness is the warm promise: everything gets
answered on return, rested, with a wink ("ready to pretend otherwise") that
a manager can smile at instead of objecting to. No complaint list, one
quotable turn of phrase.

## How it runs

`main.ts` is a deterministic program (Node 22+): it writes the fixed line to
`/output/entry.txt` and nothing else. No input, no randomness, no network, so
every run produces byte-identical output.

```sh
node main.ts            # writes /output/entry.txt
node main.ts /tmp/out/entry.txt   # write elsewhere for a local check
```

## License

MIT — see `LICENSE`.
