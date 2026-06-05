# Updating the MesaFSD team roster

For any contributor or AI agent updating the team page.

**Only edit:** `lib/team-members.ts` — not `app/team/page.tsx` for routine roster changes.

| Export | Purpose |
|--------|---------|
| `CURRENT_YEAR` | Internal label for the active roster year |
| `getLeaders()` | Leadership section (order follows `leaderNames`) |
| `getTeamMembersExcludingLeaders()` | Members grid (auto-sorted) |
| `getPreviousYearRosters()` | Collapsible "Previous years" sections |

## Data model

```ts
// Each year
{
  year: string
  leaderNames: readonly string[]   // Leadership section
  officerNames: readonly string[]  // Officers in previous years
  members: TeamMember[]            // full roster
}

// Each person
{
  name: string
  description: string
  img: string       // e.g. '/team/jane-doe.jpeg', or '' for initials
  link?: string     // LinkedIn URL, or '' if unknown
}
```

- Every `leaderNames` / `officerNames` entry must match a `name` in `members` exactly.
- Names in `leaderNames` or `officerNames` are excluded from the members grid.

## Description format

1. **Separate roles with `/`** — never `&`.
2. **Team leads use `(L)`** — never the word `Lead`.
3. **Plain disciplines** for non-leads: `Software`, `Mechanical`, `Electrical`, `Business`.

| Role | Description |
|------|-------------|
| President | `President` |
| VP + discipline | `Vice President / Mechanical` |
| Secretary + discipline | `Secretary / Software` |
| Treasurer | `Treasurer` |
| Club rep + business | `Club Rep / Business` |
| Discipline lead | `Mechanical (L)` |
| Lead + second discipline | `Electrical (L) / Mechanical` |
| Member | `Software` or `Software / Electrical` |

## Member display order

Members are sorted automatically — do not hand-order the array:

1. Team leads `(L)` first
2. By team: Electrical → Mechanical → Software → Business
3. Alphabetically by name within each group

Previous years **Officers** keep `officerNames` order. **Team members** use the sort above.

## Common tasks

**Add a member** to `roster2026_2027.members`. Add to `officerNames` if exec, `leaderNames` if in Leadership (President, VP, Secretary, Treasurer, etc.). Use `''` for unknown `img` / `link`.

**Add a photo:** save to `public/team/` as kebab-case (`jane-doe.jpeg`), set `img: '/team/jane-doe.jpeg'`. Check `ls public/team/` for existing extensions.

**Remove a member:** delete from `members`, `leaderNames`, and `officerNames`.

**Year rollover:** freeze current roster into `previousYearRosters`, create new roster constant, point getters at it, update `CURRENT_YEAR`. Reuse `img` / `link` for returning members.

## Page layout

```
Leadership  → leaderNames
Members     → everyone else (sorted)

Previous years
├── Officers      → officerNames
└── Team members  → sorted
```

## Checklist

- [ ] Only `lib/team-members.ts` changed
- [ ] `/` not `&`; `(L)` not `Lead`
- [ ] Names match across `members`, `leaderNames`, `officerNames`
- [ ] Image path exists in `public/team/`
- [ ] Year rollover: old roster in `previousYearRosters`, getters updated

## Do not

- Commit unless asked
- Invent LinkedIn URLs
- Duplicate roster data in `app/team/page.tsx`
