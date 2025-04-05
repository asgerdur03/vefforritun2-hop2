# Hópverkefni 2 Vefforritun - Task Tasker

| Nafn           | Netfang                  | Notandanafn   |
|--------------  |--------------------------|---------------|
| Ásgerður Júlía | ajg20@hi.is              | @asgerdur03   |
| Freydís Xuan   | fxl1@hi.is               | @freydisxuan  |
| Hermann Ingi   | hih65@hi.is              | @hemmih       |
| Vilborg Erlends| vie15@hi.is              | @vilborg14    |

## Uppsetning

Setja skal upp .env skrá með `NEXT_PUBLIC_BASE_URL = <linkur á vefþjónustu>`. Sjálfgefið gildi er `https://veff2-hop1.onrender.com`, en hægt er að keyra bakenda og nota þá localhost í staðin"


```bash
# Keyra npm
npm install

# Ræsa forrit
npm run dev
```

## Notendur
```json
// Admin 
{
    "username": "admin",
    "password": "password"
}

// Normal user
{
    "username": "user",
    "password": "password"
}

```

## Verkefnakröfur

Virkni fer mestmegnis eftir því hvað var útfært í hópverkefni 1.

Verkefnið skal hafa a.m.k. þrjár mismunandi síður/virkni fyrir utan forsíðu. T.d. listi af færslum með síðuflettingum, stök færsla, leitarniðurstöður. Að auki skal útfæra þá virkni sem tiltekin er hér.
- [x] **Amk 3 síður/virkni**
    - [x] Listi af Tasks, paginated /tasks (eingöngu task innskráðs notenda)
    - [x] Register, nýskráning 
    - [x] Delete task 
    - [x] Create task 
    - [x] Get users (admin only) Admin panel linkur er í footer


- [x] **Valmynd og haus**: Nav sem sýnir hvar við erum stödd. Aðgengileg á öllum síðum. 

- [x] **Fótur**: Mock fótur, og admin only virkni linkur. 
 
- [x] **Forsíða**: Static dummy content.

- [x] **Notendur**: 
    - [x] Innskráning (og útskráning)
    - [x] Nýskráning (auka, telst sem síða/virkni)
    - [x] Notendaspecific virkni (get, delete, edit?)

- [x] **Myndavirkni** Útbúa skal virkni á móti myndavirkni í vefþjónustu þ.a. hægt sé að setja inn myndir gegnum form. (Upload profile pic )

- [x] **Útlit**: Basic, grid eða flex og skalanlegt

- [x] **Alment**: 
    - [x] Next.js og TypeScript
    - [x] Server-side rendering og app router
    - [x] Loading state við vefþjónustuköll og bregðast við villum. Þar sem gögn geta verið tóm skal huga að empty state.
    - [x] 404 ef síða ef síða finnst ekki, og heimildarsíðu ef ekki er heimild til. 

- [x] **Tæki og tól**: 
    - [x] Villulaust eslint, frjálst reglusett
    - [x] Vefur settur upp í hýsingu
    - [x] README með: 
        - Upplýsingar um hvernig setja skuli upp verkefnið
        - Innskráning fyrir admin stjórnanda ásamt lykilorði. 
        - Nöfn og notendanöfn allra í hóp.
    - [x] Hópavinna og pull request með git






## Mat
- 20% Verkefni uppsett í Next.js og tengist vefþjónustum, almenn virkni 
- útfærð.
- 30% Útfærslur á móti vefþjónustum, a.m.k. þrjár síður.
- 10% Útlit.
- 10% Innskráning notanda.
- 10% Útfært á móti myndavirkni.
- 10% Tæki, tól og test. README uppsett, verkefni keyrir í hýsingu.
- 10% Hópavinna með Git og GitHub PR.
