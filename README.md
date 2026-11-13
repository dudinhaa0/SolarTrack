# SolarTrack — Aluno #24

**Monitor de Eficiência e Produção de Energia Solar**  
Atividade 16 — Personalização Nativa: Ícones e Splash Screens  
PPDM2 • 4º Semestre • Professor Adriano Rosa Mazetto

## Sobre o aplicativo

O SolarTrack é um protótipo acadêmico de monitoramento de energia solar. O painel apresenta indicadores de produção, eficiência, economia estimada e CO₂ evitado, além de um resumo ilustrativo do sistema fotovoltaico.

> Os números exibidos são demonstrativos/simulados. O aplicativo não está conectado a inversor, medidor ou equipamento físico.

## Identidade visual

- Nome: SolarTrack
- Aluno: #24
- Paleta: azul-marinho, azul, branco e amarelo solar
- Ícone nativo: `assets/icon.png` (1024 × 1024, fundo opaco)
- Tela de abertura: `assets/splash.png` (2732 × 2732, composição centralizada)

## Tecnologias

- React + Vite
- Capacitor 7
- `@capacitor/assets`
- Android
- GitHub Actions

## Requisitos

Node.js 22, npm, Git e JDK 21. Para executar no Android localmente, também é necessário ter o Android SDK configurado.

## Executar no navegador

```bash
npm install
npm run dev
```

## Preparar e sincronizar o Android

Execute na raiz do projeto:

```bash
npm install
npm run build
npx cap add android
npx capacitor-assets generate --android
npx cap sync android
```

Se a pasta `android` já existir, não execute novamente `npx cap add android`; siga diretamente com:

```bash
npm run build
npx capacitor-assets generate --android
npx cap sync android
```

## Abrir no Android Studio

```bash
npx cap open android
```

Depois, conecte um celular com depuração USB ativada ou use um emulador e execute o aplicativo pelo Android Studio.

## Gerar APK pelo GitHub Actions

1. Crie um repositório no GitHub.
2. Envie todos os arquivos deste projeto para a branch `main` (ou `master`).
3. Abra a aba **Actions** do repositório.
4. Aguarde o workflow **SolarTrack - Gerar APK Android** terminar com sucesso.
5. Abra a execução concluída e baixe o artefato **meu-aplicativo-apk**.
6. Extraia o ZIP e instale `app-debug.apk` no Android.

O workflow está em `.github/workflows/android-build.yml`. Ele instala as dependências, compila a versão web, prepara a plataforma Android quando necessário, gera os recursos nativos, sincroniza e compila a APK.

## Estrutura principal

```text
SolarTrack_Aluno24/
├── .github/
│   └── workflows/
│       └── android-build.yml
├── assets/
│   ├── icon.png
│   └── splash.png
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── style.css
├── capacitor.config.ts
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Identificação acadêmica

- Projeto: SolarTrack
- Número do aluno: 24
- Disciplina: PPDM2
- Semestre: 4º
- Professor: Adriano Rosa Mazetto

<img width="438" height="654" alt="Captura de tela 2026-11-13 090028" src="https://github.com/user-attachments/assets/200fe575-8c00-46d3-90c8-492d781fabe2" />
<img width="432" height="658" alt="Captura de tela 2026-11-13 090105" src="https://github.com/user-attachments/assets/7df4c278-b8b5-4441-a23f-937afe7402b7" />


