import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  // Objeto para o idioma Inglês
  en: {
    translation: {
      "boasVindas": {
        "tituloAnimado1": "Áulus Batista",
        "tituloAnimado2": "Áulus Batista - QA & Backend Developer",
        "titulo": "$ Welcome to my Portfolio",
        "subtitulo": "Backend Developer in training, working as QA.",
        "info1": "Backend Development | QA | Automated Testing",
        "info2": "Brazil",
        "info3": "Software Engineering",
        "navegue": "Type `help` to learn more about the commands."
      },
      "sobre": {
        "nome": "Áulus Batista",
        "cargo": "QA & Backend Developer",
        "biografia": "I am passionate about technology, quality, and performance. I currently specialize in backend and automated testing, seeking to deliver robust and reliable solutions. I am always open to discussing new opportunities, interesting projects, or simply exchanging ideas about technology.",
        "titulo_skills": "Main Skills:"
      },
      "comando": {
        "nao_reconhecido": "Command not recognized:",
        "ver_ajuda": "Type 'help' to see the options.",
      },
      "ajuda": {
        "titulo": "Available Commands:",
        "desc_sobre": "Shows a brief description about me.",
        "desc_ajuda": "Shows this list of available commands.",
        "desc_projetos": "Displays the main projects I've worked on.",
        "desc_contato": "Displays my contact information.",
        "desc_curriculo": "View and download my resume/CV.",
        "desc_limpar": "Clears the terminal history."
      },
      "contato": {
        "titulo": "Get in Touch",
        "subtitulo": "Feel free to connect or send me a message.",
        "linkedin": "LinkedIn (aulus-batista)",
        "github": "GitHub (AulusHZP)",
        "email": "aulushzp@gmail.com",
        "iniciar_envio": "Send an email through the terminal →",
        "form": {
          "titulo": "Or send me a message directly from here:",
          "placeholder_nome": "Your name",
          "placeholder_email": "Your email",
          "placeholder_mensagem": "Your message",
          "botao_enviando": "Sending...",
          "status_sucesso": "Thank you! Your message has been sent.",
          "status_erro": "An error occurred. Please try again."
        }
      },
      "projetos": {
        "tituloSecao": "My Main Projects:",
        "repositorio": "View Repository →",
        "conttare_titulo": "Conttare Accounting",
        "conttare_desc": "ConttareContabilidade is a software system developed to assist in the management and organization of accounting processes, focusing on facilitating the control of financial and operational information for companies.",
        "labproject_titulo": "Software Engineering Projects",
        "labproject_desc": "LabProjetoDeSoftware is an academic repository used to develop and organize activities for the Software Engineering Laboratory course, applying software engineering practices, collaboration, and code versioning on GitHub.",
        "playwright_titulo": "Automation using Playwright",
        "playwright_desc": "Test automation project focused on validating the login flow of a web application, verifying authentication with valid and invalid credentials to ensure system reliability.",
        "maestro_titulo": "Automation using Maestro Studio",
        "maestro_desc": "Mobile test automation project using the Maestro framework to run end-to-end tests based on YAML flows that simulate real user interactions in the application.",
        "webdriverio_titulo": "Automation using WebdriverIO",
        "webdriverio_desc": "Web test automation project using the WebdriverIO framework to run end-to-end tests that simulate real user interactions in browsers."
      }
    }
  },
  // Objeto para o idioma Português
  pt: {
    translation: {
      "boasVindas": {
        "tituloAnimado1": "Áulus Batista",
        "tituloAnimado2": "Áulus Batista - Desenvolvedor Frontend & QA",
        "titulo": "$ Bem-vindo ao meu Portfólio",
        "subtitulo": "Desenvolvedor Frontend em formação, atuando como QA.",
        "info1": "Desenvolvimento Frontend | QA | Testes Automatizados",
        "info2": "Brasil",
        "info3": "Engenharia de Software",
        "navegue": "Digite `ajuda` para conhecer mais sobre os comandos."
      },
      "sobre": {
        "nome": "Áulus Batista",
        "cargo": "Desenvolvedor Backend & QA",
        "biografia": "Sou apaixonado por tecnologia, qualidade e performance. Atualmente me especializo em backend e testes automatizados, buscando entregar soluções robustas e confiáveis. Estou sempre aberto para discutir novas oportunidades, projetos interessantes ou simplesmente trocar ideias sobre tecnologia.",
        "titulo_skills": "Principais Habilidades:"
      },
      "comando": {
        "nao_reconhecido": "Comando não reconhecido:",
        "ver_ajuda": "Digite 'ajuda' para ver a lista de comandos disponíveis."
      },
      "ajuda": {
        "titulo": "Comandos disponíveis:",
        "desc_sobre": "Mostra uma breve descrição sobre mim.",
        "desc_ajuda": "Mostra esta lista de comandos disponíveis.",
        "desc_projetos": "Exibe os principais projetos em que trabalhei.",
        "desc_contato": "Exibe minhas informações de contato.",
        "desc_curriculo": "Visualiza e baixa meu currículo.",
        "desc_limpar": "Limpa o histórico do terminal."
      },
      "contato": {
        "titulo": "Entre em Contato",
        "subtitulo": "Sinta-se à vontade para se conectar ou me enviar uma mensagem.",
        "linkedin": "LinkedIn (aulus-batista)",
        "github": "GitHub (AulusHZP)",
        "email": "aulushzp@gmail.com",
        "iniciar_envio": "Envie um email pelo terminal →",
        "form": {
          "titulo": "Ou me envie uma mensagem diretamente daqui:",
          "placeholder_nome": "Seu nome",
          "placeholder_email": "Seu e-mail",
          "placeholder_mensagem": "Sua mensagem",
          "botao_enviar": "Enviar Mensagem",
          "botao_enviando": "Enviando...",
          "status_sucesso": "Obrigado! Sua mensagem foi enviada.",
          "status_erro": "Ocorreu um erro. Tente novamente."
        }
      },
      "projetos": {
        "tituloSecao": "Meus Principais Projetos:",
        "repositorio": "Ver Repositório →",
        "conttare_titulo": "Conttare Contabilidade",
        "conttare_desc": "O ConttareContabilidade é um sistema de software desenvolvido para auxiliar na gestão e organização de processos contábeis, com foco em facilitar o controle de informações financeiras e operacionais de empresas.",
        "labproject_titulo": "Projetos em Projeto de Software",
        "labproject_desc": "O LabProjetoDeSoftware é um repositório acadêmico utilizado para desenvolver e organizar atividades da disciplina de Laboratório de Projeto de Software, aplicando práticas de engenharia de software, colaboração e versionamento de código no GitHub.",
        "playwright_titulo": "Automação utilizando Playwright",
        "playwright_desc": "Projeto de automação de testes focado na validação do fluxo de login de uma aplicação web, verificando autenticação com credenciais válidas e inválidas para garantir a confiabilidade do sistema.",
        "maestro_titulo": "Automação utilizando Maestro Studio",
        "maestro_desc": "Projeto de automação de testes mobile utilizando o framework Maestro para executar testes end-to-end baseados em fluxos YAML que simulam interações reais do usuário na aplicação.",
        "webdriverio_titulo": "Automação utilizando WebdriverIO",
        "webdriverio_desc": "Projeto de automação de testes web utilizando o framework WebdriverIO para executar testes end-to-end que simulam interações reais do usuário em navegadores."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;