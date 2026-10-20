import React, { FC } from "react"
import GithubSlugger from "github-slugger"
import type { Bot, BotCommand } from "../../data/bots"
import type { ITocItem } from "../../types"
import { cn } from "../../lib/cn"

export const INTERACTIVE_ID = "bots-you-can-use"
export const PASSIVE_ID = "passive-bots"

export function botId(bot: Bot): string {
  return new GithubSlugger().slug(bot.name)
}

// Groups at depth 2, each bot under its group at depth 3.
export function botsToc(interactive: Bot[], passive: Bot[]): ITocItem[] {
  const item = (depth: number, id: string, title: string) => ({
    depth,
    link: `#${id}`,
    title,
  })
  return [
    item(2, INTERACTIVE_ID, "Bots you can use"),
    ...interactive.map((bot) => item(3, botId(bot), bot.name)),
    item(2, PASSIVE_ID, "Passive bots"),
    ...passive.map((bot) => item(3, botId(bot), bot.name)),
  ]
}

const Source: FC<{ bot: Bot }> = ({ bot }) =>
  bot.source ? (
    <a href={bot.source} target="_blank" rel="noreferrer" className="bot-link">
      Source
      <span className="sr-only"> code for {bot.name} (opens in a new tab)</span>
    </a>
  ) : (
    <span className="text-main-fg/60">
      {bot.sourceNote ?? "Source is private"}
    </span>
  )

const Commands: FC<{ commands: BotCommand[]; className?: string }> = ({
  commands,
  className,
}) => (
  <dl className={cn("bot-commands", className)}>
    {commands.map((command) => (
      <div key={command.usage} className="contents">
        <dt>
          <code className="bot-code">{command.usage}</code>
        </dt>
        <dd>{command.description}</dd>
      </div>
    ))}
  </dl>
)

const BotCard: FC<{ bot: Bot }> = ({ bot }) => (
  <section
    id={botId(bot)}
    aria-labelledby={`${botId(bot)}-name`}
    className="card-gradient-border scroll-mt-9 rounded-[10px] px-6 pt-5 pb-6 max-md:px-4"
  >
    <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
      <h3
        id={`${botId(bot)}-name`}
        className="m-0 font-header text-[25px] leading-[31px] font-bold tracking-[-0.75px]"
      >
        {bot.name}
      </h3>
      <p className="m-0 flex flex-wrap items-baseline gap-x-4 text-base leading-[21px]">
        {bot.prefix && (
          <span className="text-main-fg/75">
            Prefix <code className="bot-code">{bot.prefix}</code>
            {bot.prefixNote && (
              <span className="text-main-fg/60">, {bot.prefixNote}</span>
            )}
          </span>
        )}
        <Source bot={bot} />
      </p>
    </header>

    <p className="m-0 mt-2.5">{bot.description}</p>
    {bot.notes?.map((note) => (
      <p key={note} className="m-0 mt-2.5 text-main-fg/85">
        {note}
      </p>
    ))}

    {bot.scale && (
      <ol
        aria-label="Points and what they lead to"
        className="m-0 mt-4 grid list-none grid-cols-5 gap-1 p-0 max-sm:grid-cols-1"
      >
        {bot.scale.map((step) => (
          <li
            key={step.points}
            className="flex flex-col rounded-[5px] bg-main-fg/[0.06] px-3 py-2 max-sm:flex-row max-sm:justify-between"
          >
            <span className="font-mono text-[15px] text-main-fg/70">
              {step.points} pts
            </span>
            <span className="text-base leading-[21px]">{step.outcome}</span>
          </li>
        ))}
      </ol>
    )}

    {bot.commands && (
      <Commands
        commands={bot.commands}
        className="mt-5 border-t border-card-border pt-4"
      />
    )}

    {bot.extraCommands && (
      <div className="mt-5 border-t border-card-border pt-4">
        <h4 className="m-0 text-lg leading-[23px] font-bold">
          {bot.extraCommands.title}
        </h4>
        {bot.extraCommands.note && (
          <p className="m-0 mt-1 text-base leading-[21px] text-main-fg/70">
            {bot.extraCommands.note}
          </p>
        )}
        <Commands commands={bot.extraCommands.commands} className="mt-3" />
      </div>
    )}
  </section>
)

const PassiveBotCard: FC<{ bot: Bot }> = ({ bot }) => (
  <section
    id={botId(bot)}
    aria-labelledby={`${botId(bot)}-name`}
    className="card-gradient-border flex scroll-mt-9 flex-col rounded-[10px] px-5 pt-4 pb-5"
  >
    <h3
      id={`${botId(bot)}-name`}
      className="m-0 font-header text-xl leading-[26px] font-bold tracking-[-0.75px]"
    >
      {bot.name}
    </h3>
    <p className="m-0 mt-1.5 grow">{bot.description}</p>
    <p className="m-0 mt-3 text-base leading-[21px]">
      <Source bot={bot} />
    </p>
  </section>
)

const groupHeading =
  "m-0 scroll-mt-9 font-header text-[31.5px] leading-[38px] font-bold tracking-[-0.75px]"

export const BotList: FC<{
  intro: string[]
  interactive: Bot[]
  passive: Bot[]
}> = ({ intro, interactive, passive }) => (
  <div className="bots text-lg leading-[23px] tracking-[-0.75px] text-main-fg">
    {intro.map((line) => (
      <p key={line} className="m-0 mb-[23px]">
        {/* `backticks` mark code, as in Markdown. */}
        {line.split("`").map((part, index) =>
          index % 2 ? (
            <code key={index} className="bot-code">
              {part}
            </code>
          ) : (
            part
          )
        )}
      </p>
    ))}

    <h2 id={INTERACTIVE_ID} className={cn(groupHeading, "mt-10")}>
      Bots you can use
    </h2>
    <div className="mt-5 flex flex-col gap-4">
      {interactive.map((bot) => (
        <BotCard key={bot.name} bot={bot} />
      ))}
    </div>

    <h2 id={PASSIVE_ID} className={cn(groupHeading, "mt-14")}>
      Passive bots
    </h2>
    <p className="m-0 mt-[19px]">
      You&rsquo;ll see these around the server, but you never need to talk to
      them.
    </p>
    <div className="mt-5 grid grid-cols-2 gap-4 max-md:grid-cols-1">
      {passive.map((bot) => (
        <PassiveBotCard key={bot.name} bot={bot} />
      ))}
    </div>
  </div>
)
