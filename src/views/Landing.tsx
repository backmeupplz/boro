import React from 'react'
import formatNumber from 'helpers/formatNumber'
import PurposeBlock from 'components/PurposeBlock'
import PurposeItem from 'components/PurposeItem'
import Steps from 'components/Steps'
import Perks from 'components/Perks'
import Faq from 'components/Faq'
import Avatar from 'components/Avatar'
import {
  HeaderText,
  BodyText,
  SubheaderText,
  GradientText,
} from 'components/Text'
import Link from 'components/Link'
import useLanding from 'hooks/useLanding'

const Landing = () => {
  const { userCount } = useLanding()

  return (
    <div>
      <Avatar />
      <HeaderText>Привет! Это Никита</HeaderText>
      <BodyText>
        Я запустил более 40 IT продуктов, из которых 19 остались в живых и
        набрали {userCount ? formatNumber(userCount) : '~'} пользователей.
        Посмотреть статистику в реальном времени по каждому из проектов можно
        вот <Link url="https://borodutch.com">тут</Link>.
      </BodyText>
      <PurposeBlock>
        <PurposeItem
          image="chart"
          title="Я на собственном опыте разобрался в том, что работает, и в том, что не работает, при запуске IT сервисов"
          subtitle="Я знаю, что именно нужно сделать, чтобы запустить MVP за 2-6 недель и набрать себе первых пользователей. Я знаю, как выпустить на рынок решение, которое нужно не только создателям, но и реальным пользователям."
        />
        <PurposeItem
          image="glass"
          title="Последние несколько лет я пытался найти ламповое сообщество таких же серийных запускаторов, как и я"
          subtitle="Сообщество людей, которые любят создавать MVP быстро, дешево и сразу проверять на живом рынке спрос. К сожалению, сколько бы я ни искал, везде был какой-то обезьянник из вонаби стартаперов, которым лишь бы поболтать, но ни в коем случае не запуститься."
        />
        <PurposeItem
          image="time"
          title="Поэтому я решил создать свой собственный закрытый клуб"
          subtitle="В нем должны быть только люди, которые реально запускают продукты, а не жуют сопли полгода-год, запускают на рынок какую-то никому ненужную чушь и разочаровываются в IT индустрии, уходя в затяжную депрессию. Мы говорим депрессии и соплежуйству четкое “Нет”!"
        />
      </PurposeBlock>
      <SubheaderText>
        Главная цель вашего членства в Бородач Клубе — это запуск своего
        продукта, проверка бизнес-гипотезы и последующая доработка продукта по
        пользовательскому фидбеку
      </SubheaderText>
      <Steps
        steps={[
          { index: 1, title: 'Отрисовка макетов на бумаге от руки' },
          { index: 1.5, title: 'Сверка макетов с клубом и со мной' },
          { index: 2, title: 'Отрисовка дизайна с дизайнером' },
          { index: 2.5, title: 'Сверка дизайна с клубом и со мной' },
          { index: 3, title: 'Разработка продукта с программистом' },
          { index: 4, title: 'Запуск и поиск первых пользователей' },
          {
            index: 5,
            title: 'Улучшение продукта по пользовательскому фидбеку',
          },
        ]}
      />
      <HeaderText>
        Это элитный клуб и членство в нем стоит{' '}
        <GradientText>$23.11</GradientText> в месяц
      </HeaderText>
      <BodyText>
        Ценник обусловлен двумя важными аспектами. Во-первых, пейвол позволит
        отсеять людей, которым клуб не будет приносить пользу — такие люди не
        нужны клубу, а клуб не нужен им. Во-вторых, запуск продукта — это хоть и
        не дорогое, но и не дешевое удовольствие. Считайте, что $23.11 в месяц
        будет малым процентом от того, что вы потратите на запуск.
      </BodyText>
      <Perks
        perks={[
          'Доступ в закрытый Телеграм-чат с no-bullshit запускаторами продуктов, которые не ноют годами о сложностях запуска, а берут и делают',
          'Собственную шкуру на кону, ведь, заплатив такие деньжища, уж точно, как минимум, жаба внутри будет заставлять работать',
          'Прямую линию связи со мной, советы, менторскую поддержку, помощь на каждом из этапов запуска продукта: я помогу упростить, где надо упростить, и уточнить там, где надо уточнить; помогу выбрать хороший технологический стек, найти хорошего разработчика, дизайнера, копирайтера — в общем, создам все условия, чтобы вы запустились',
        ]}
      />
      <SubheaderText>Ответы на часто задаваемые вопросы</SubheaderText>
      <Faq
        questions={[
          {
            question: 'Бородач Клуб запустит за меня проект?',
            answer:
              'Нет, вы платите $23.11 в месяц за доступ к Клубу и ко мне лично. Вам помогут советом, поиском исполнителей, упрощением концепции продукта, выбором бизнес-гипотезы, но не непосредственно разработкой, запуском, продвижением и остальным. Я ожидаю самостоятельности ото всех членов клуба.',
          },
          {
            question: 'У вас есть на примете дизайнеры и программисты?',
            answer:
              'Нет, но мы поможем вам найти их на открытых площадках, написать правильное техзадание, договориться о процессе работы.',
          },
          {
            question:
              'Получается, я плачу просто за доступ в закрытую группу в Телеграме?',
            answer:
              'Да, именно так. Просто люди в этой закрытой группе — на вес золота.',
          },
          {
            question:
              'Что, если мне не понравится клуб или я пойму, что он мне не нужен?',
            answer:
              'Всегда можно отписаться от платной подписки и, тем самым, выйти из клуба. Если вы сделаете это в течение своего первого месяца нахождения в клубе, то вам еще и вернут деньги за первый месяц (нужно написать о возврате мне лично). Возможность возврата любых денег за подписку истекает спустя один календарный месяц членства в клубе.',
          },
        ]}
      />
      <SubheaderText>
        Готовы начать? Зайдите в свой аккаунт через Телеграм сверху, там вы
        сможете оплатить подписку и получить доступ к закрытой группе.
      </SubheaderText>
      <BodyText>
        Не видите кнопку входа через Телеграм справа вверху? Попробуйте другой
        браузер.
      </BodyText>
    </div>
  )
}

export default Landing
