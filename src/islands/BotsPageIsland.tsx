import React from "react"
import { Shell } from "./Shell"
import { Article } from "../components/Article"
import { BotList, botsToc } from "../components/BotList"
import { botsIntro, interactiveBots, passiveBots } from "../data/bots"
import type { ResourceDataShape } from "../lib/content"

export default function BotsPageIsland({
  resourceData,
}: {
  resourceData: ResourceDataShape
}) {
  return (
    <Shell layout="regular" pathname="/bots" resourceData={resourceData}>
      <Article title="Bots" toc={botsToc(interactiveBots, passiveBots)}>
        <BotList
          intro={botsIntro}
          interactive={interactiveBots}
          passive={passiveBots}
        />
      </Article>
    </Shell>
  )
}
