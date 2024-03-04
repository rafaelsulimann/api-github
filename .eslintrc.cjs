module.exports = {
  root: true, // Indica que este é o arquivo de configuração principal e que o ESLint não deve procurar em diretórios pais
  env: {
    browser: true, // Habilita variáveis globais disponíveis em browsers, como window e document
    es2020: true, // Habilita a sintaxe do ECMAScript 2020
    jest: true, // Habilita variáveis globais do Jest para testes
  },
  extends: [
    "eslint:recommended", // Usa as regras recomendadas pelo ESLint
    "plugin:@typescript-eslint/recommended", // Usa as regras recomendadas para TypeScript do plugin @typescript-eslint
    "plugin:react/recommended", // Usa as regras recomendadas para React
    "plugin:react-hooks/recommended", // Usa as regras recomendadas para os hooks do React
    "airbnb-typescript/base", // Usa a configuração do Airbnb para TypeScript
    "prettier", // Usa as regras do Prettier para formatar o código
    "plugin:prettier/recommended", // Faz a integração entre ESLint e Prettier
    "plugin:import/typescript", // Adiciona suporte para importações em TypeScript
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"], // Ignora arquivos no diretório dist e o arquivo .eslintrc.cjs
  parser: "@typescript-eslint/parser", // Define o parser do ESLint para entender TypeScript
  globals: {
    Atomics: "readonly", // Define Atomics como uma variável global somente leitura
    SharedArrayBuffer: "readonly", // Define SharedArrayBuffer como uma variável global somente leitura
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Habilita o suporte para sintaxe JSX
    },
    ecmaVersion: "latest", // Usa a versão mais recente do ECMAScript
    sourceType: "module", // Indica que o código usa a sintaxe de módulos ES
    project: ["./tsconfig.json"], // Especifica os arquivos de configuração do projeto para o parser
  },
  plugins: [
    "@typescript-eslint", // Habilita o plugin @typescript-eslint
    "import", // Habilita o plugin de importação para lidar com a resolução de caminhos
    "prettier", // Habilita o plugin do Prettier para formatar o código
    "react", // Habilita o plugin do React
    "react-hooks", // Habilita o plugin para as regras dos hooks do React
    "testing-library", // Habilita o plugin do Testing Library para testes
    "jsx-a11y", // Habilita o plugin jsx-a11y para acessibilidade
    "unused-imports" // Adiciona regras para lidar com importações e variáveis não utilizadas de forma mais eficiente do que as regras padrão do ESLint.
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
		"unused-imports/no-unused-imports": "error", // Verifica por importações que são declaradas mas não utilizadas em nenhum lugar do código
		"unused-imports/no-unused-vars": [
		  "error", // Marca como erro quando variáveis importadas não são utilizadas
		  {
		    "vars": "all", // Aplica a regra a todas as variáveis ("all") no escopo do arquivo. Todas as variáveis declaradas devem ser usadas.
		    "args": "after-used", // Ignora argumentos de função anteriores ao último utilizado. Útil para funções que recebem múltiplos parâmetros, mas nem todos são necessários.
		    "ignoreRestSiblings": true // Permite ignorar variáveis não utilizadas em uma desestruturação quando estão sendo coletadas as propriedades restantes usando o operador rest (...).
		  }
		],
    "react/jsx-filename-extension": [ "warn", { "extensions": [ ".tsx", "ts" ] } ], // Permite apenas arquivos .tsx para JSX
    "import/prefer-default-export": "off", // Desativa a regra que exige exportação default
    "import/extensions": "off", // Desativa a regra sobre extensões de arquivo nas importações
    "react/prop-types": "off", // Desativa a regra que exige prop-types em React (útil para projetos TypeScript)
    "import/no-extraneous-dependencies": "off", // Evita importações de dependências não listadas no package.json
    "react-refresh/only-export-components": "off", // Específica para o plugin React Refresh, desativada
    "@typescript-eslint/no-explicit-any": "off", // Permite o uso de `any` no TypeScript
    "prettier/prettier": [ "error", { // Configurações do Prettier como regras do ESLint
      printWidth: 80, // Largura máxima da linha
      tabWidth: 2, // Largura do tab
      trailingComma: "all", // Vírgulas no final de objetos e arrays
      arrowParens: "always", // Parênteses ao redor dos argumentos da arrow function
      endOfLine: "auto", // Lida com a quebra de linha de forma automática
    }],
    // Regras do jsx-a11y para acessibilidade
    "jsx-a11y/alt-text": [ "warn", { elements: ["img"], img: ["Image"] } ], // Emite um aviso para elementos <img> que não tenham um atributo alt, aumentando a acessibilidade para usuários de leitores de tela. A configuração especifica que apenas elementos <img> e um componente customizado chamado "Image" são verificados por esta regra.

    "jsx-a11y/aria-props": "warn", // Emite um aviso para propriedades ARIA inválidas em elementos JSX, garantindo que apenas atributos ARIA válidos sejam utilizados.
    "jsx-a11y/aria-proptypes": "warn", // Emite um aviso quando os valores das propriedades ARIA não correspondem aos seus tipos esperados (por exemplo, usando uma string onde um booleano é esperado).
    "jsx-a11y/aria-unsupported-elements": "warn", // // Emite um aviso quando atributos ARIA são usados em elementos que não os suportam, como <meta>, <html>, <script>, e <style>.
    "jsx-a11y/role-has-required-aria-props": "warn", // Emite um aviso quando um elemento com um "role" específico não possui todas as propriedades ARIA requeridas por esse role, ajudando a garantir que os elementos sejam completamente acessíveis.
    "jsx-a11y/role-supports-aria-props": "warn", // Emite um aviso quando propriedades ARIA são usadas com um role que não as suporta, evitando a utilização incorreta que pode confundir usuários de tecnologias assistivas.
    "react/no-unknown-property": "error", // Evita propriedades desconhecidas no JSX
    "react/self-closing-comp": "error", // Marca como erro quando um componente React que não tem filhos não é fechado com uma tag auto-fechada. Por exemplo, <Component></Component> deve ser escrito como <Component />.
    "@typescript-eslint/no-use-before-define": [ "error" ], // Marca como erro o uso de variáveis, funções, classes ou interfaces antes de elas serem definidas. Isso ajuda a prevenir erros de referência antes da definição no código TypeScript.
    "@typescript-eslint/no-shadow": [ "error" ], // Habilita a regra de shadowing para TypeScript
    "react-hooks/rules-of-hooks": "error", // Garante que os hooks do React sejam chamados de forma correta
    "react-hooks/exhaustive-deps": "warn", // Garante que os arrays de dependências dos hooks estejam corretos
  },
  settings: {
    react: {
      version: "detect", // Detecta automaticamente a versão do React para as regras de linter
    },
  },
};
