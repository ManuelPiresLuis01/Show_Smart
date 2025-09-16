import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  en: {
    translation: {
      // Navigation
      "nav.home": "Home",
      "nav.exams": "Exams",
      "nav.dashboard": "Dashboard",
      "nav.verify": "Verify Certificate",
      "nav.login": "Login",
      "nav.register": "Register",
      "nav.logout": "Logout",

      // Landing Page
      "hero.title": "Get Certified in Your Field",
      "hero.subtitle":
        "Take professional exams, get graded instantly, and download verified certificates with QR codes",
      "hero.cta": "Take an Exam",
      "steps.title": "How It Works",
      "steps.register": "Register",
      "steps.register.desc": "Create your account and choose your preferred language",
      "steps.exam": "Take Exam",
      "steps.exam.desc": "Complete professional exams in your field of expertise",
      "steps.certificate": "Get Certificate",
      "steps.certificate.desc": "Download your verified certificate with QR code",
      "benefits.title": "Why Choose Our Platform",
      "benefits.secure": "Secure & Verified",
      "benefits.secure.desc": "All certificates are digitally verified with QR codes",
      "benefits.instant": "Instant Results",
      "benefits.instant.desc": "Get your results and certificate immediately after completion",
      "benefits.recognized": "Industry Recognized",
      "benefits.recognized.desc": "Our certifications are accepted by leading companies",

      // Authentication
      "auth.fullName": "Full Name",
      "auth.email": "Email",
      "auth.password": "Password",
      "auth.dateOfBirth": "Date of Birth",
      "auth.gender": "Gender",
      "auth.gender.male": "Male",
      "auth.gender.female": "Female",
      "auth.gender.other": "Other",
      "auth.terms": "I accept the Terms and Conditions",
      "auth.language": "Language Preference",
      "auth.register": "Register",
      "auth.login": "Login",
      "auth.forgotPassword": "Forgot Password?",
      "auth.resetPassword": "Reset Password",
      "auth.backToLogin": "Back to Login",

      // Dashboard
      "dashboard.welcome": "Welcome back, {{name}}!",
      "dashboard.availableExams": "Available Exams",
      "dashboard.myResults": "My Results",
      "dashboard.startExam": "Start Exam",
      "dashboard.viewCertificate": "View Certificate",
      "dashboard.free": "Free",
      "dashboard.price": "${{price}}",

      // Exam
      "exam.timeRemaining": "Time Remaining: {{time}}",
      "exam.question": "Question {{current}} of {{total}}",
      "exam.next": "Next",
      "exam.previous": "Previous",
      "exam.submit": "Submit Exam",
      "exam.autoSubmit": "Time's up! Exam submitted automatically.",

      // Results
      "results.score": "Your Score: {{score}}%",
      "results.passed": "Congratulations! You passed!",
      "results.failed": "You didn't pass this time. Try again!",
      "results.downloadCertificate": "Download Certificate",
      "results.viewCertificate": "View Certificate",
      "results.retakeExam": "Retake Exam",

      // Certificate Verification
      "verify.title": "Certificate Verification",
      "verify.subtitle": "Enter a certificate ID to verify its authenticity",
      "verify.certificateId": "Certificate ID",
      "verify.verify": "Verify",
      "verify.valid": "Valid Certificate",
      "verify.invalid": "Invalid Certificate",
      "verify.holder": "Certificate Holder",
      "verify.exam": "Exam",
      "verify.score": "Score",
      "verify.date": "Date Issued",

      // Admin
      "admin.title": "Admin Panel",
      "admin.manageExams": "Manage Exams",
      "admin.manageUsers": "Manage Users",
      "admin.manageCertificates": "Manage Certificates",
      "admin.createExam": "Create Exam",
      "admin.editExam": "Edit Exam",
      "admin.deleteExam": "Delete Exam",

      // Footer
      "footer.about": "About",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms of Service",
      "footer.contact": "Contact",

      // Common
      "common.loading": "Loading...",
      "common.error": "An error occurred",
      "common.success": "Success!",
      "common.cancel": "Cancel",
      "common.save": "Save",
      "common.delete": "Delete",
      "common.edit": "Edit",
      "common.view": "View",
      "common.back": "Back",
    },
  },
  pt: {
    translation: {
      // Navigation
      "nav.home": "Início",
      "nav.exams": "Exames",
      "nav.dashboard": "Painel",
      "nav.verify": "Verificar Certificado",
      "nav.login": "Entrar",
      "nav.register": "Registar",
      "nav.logout": "Sair",

      // Landing Page
      "hero.title": "Obtenha Certificação na Sua Área",
      "hero.subtitle":
        "Faça exames profissionais, seja avaliado instantaneamente e descarregue certificados verificados com códigos QR",
      "hero.cta": "Fazer Exame",
      "steps.title": "Como Funciona",
      "steps.register": "Registar",
      "steps.register.desc": "Crie a sua conta e escolha o seu idioma preferido",
      "steps.exam": "Fazer Exame",
      "steps.exam.desc": "Complete exames profissionais na sua área de especialização",
      "steps.certificate": "Obter Certificado",
      "steps.certificate.desc": "Descarregue o seu certificado verificado com código QR",
      "benefits.title": "Porquê Escolher a Nossa Plataforma",
      "benefits.secure": "Seguro e Verificado",
      "benefits.secure.desc": "Todos os certificados são verificados digitalmente com códigos QR",
      "benefits.instant": "Resultados Instantâneos",
      "benefits.instant.desc": "Obtenha os seus resultados e certificado imediatamente após a conclusão",
      "benefits.recognized": "Reconhecido pela Indústria",
      "benefits.recognized.desc": "As nossas certificações são aceites por empresas líderes",

      // Authentication
      "auth.fullName": "Nome Completo",
      "auth.email": "Email",
      "auth.password": "Palavra-passe",
      "auth.dateOfBirth": "Data de Nascimento",
      "auth.gender": "Género",
      "auth.gender.male": "Masculino",
      "auth.gender.female": "Feminino",
      "auth.gender.other": "Outro",
      "auth.terms": "Aceito os Termos e Condições",
      "auth.language": "Preferência de Idioma",
      "auth.register": "Registar",
      "auth.login": "Entrar",
      "auth.forgotPassword": "Esqueceu a palavra-passe?",
      "auth.resetPassword": "Redefinir Palavra-passe",
      "auth.backToLogin": "Voltar ao Login",

      // Dashboard
      "dashboard.welcome": "Bem-vindo de volta, {{name}}!",
      "dashboard.availableExams": "Exames Disponíveis",
      "dashboard.myResults": "Os Meus Resultados",
      "dashboard.startExam": "Iniciar Exame",
      "dashboard.viewCertificate": "Ver Certificado",
      "dashboard.free": "Gratuito",
      "dashboard.price": "{{price}}€",

      // Exam
      "exam.timeRemaining": "Tempo Restante: {{time}}",
      "exam.question": "Pergunta {{current}} de {{total}}",
      "exam.next": "Seguinte",
      "exam.previous": "Anterior",
      "exam.submit": "Submeter Exame",
      "exam.autoSubmit": "Tempo esgotado! Exame submetido automaticamente.",

      // Results
      "results.score": "A Sua Pontuação: {{score}}%",
      "results.passed": "Parabéns! Passou!",
      "results.failed": "Não passou desta vez. Tente novamente!",
      "results.downloadCertificate": "Baixar Certificado",
      "results.viewCertificate": "Ver Certificado",
      "results.retakeExam": "Repetir Exame",

      // Certificate Verification
      "verify.title": "Verificação de Certificado",
      "verify.subtitle": "Introduza um ID de certificado para verificar a sua autenticidade",
      "verify.certificateId": "ID do Certificado",
      "verify.verify": "Verificar",
      "verify.valid": "Certificado Válido",
      "verify.invalid": "Certificado Inválido",
      "verify.holder": "Portador do Certificado",
      "verify.exam": "Exame",
      "verify.score": "Pontuação",
      "verify.date": "Data de Emissão",

      // Admin
      "admin.title": "Painel de Administração",
      "admin.manageExams": "Gerir Exames",
      "admin.manageUsers": "Gerir Utilizadores",
      "admin.manageCertificates": "Gerir Certificados",
      "admin.createExam": "Criar Exame",
      "admin.editExam": "Editar Exame",
      "admin.deleteExam": "Eliminar Exame",

      // Footer
      "footer.about": "Sobre",
      "footer.privacy": "Política de Privacidade",
      "footer.terms": "Termos de Serviço",
      "footer.contact": "Contacto",

      // Common
      "common.loading": "A carregar...",
      "common.error": "Ocorreu um erro",
      "common.success": "Sucesso!",
      "common.cancel": "Cancelar",
      "common.save": "Guardar",
      "common.delete": "Eliminar",
      "common.edit": "Editar",
      "common.view": "Ver",
      "common.back": "Voltar",
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: "pt",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
