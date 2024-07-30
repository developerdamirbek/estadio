import { ReactNode } from 'react'

export const freeConsultationDictionary = {
  helpToChoose: 'Tanlovga yordam beramiz',
  freeConsultation: 'Bepul konsultatsiya oling',
  contactToUs: 'Savollaringiz bo‘lsa, bizga murojaat qiling.',
  answerToAllQuestions: 'Barcha savollaringizga javob olasiz :)',
  questionsAboutCourse: "Kurs bo'yicha savollaringizga javob beramiz",
  writeNameAndPhone:
    "Telefon raqamingizni yozib qoldiring, biz sizga qo'ng'iroq qilamiz va birorta ham savolingiz javobsiz qolmasligiga haraqat qilamiz",
  enterName: 'Ismingizni kiriting',
  lessThan: 'Kamida 3 ta belgi',
  enterPhoneNumber: 'Telefon raqamingizni kiriting',
  getAnswerAllYourQuestions: 'Barcha savollaringizga javob olasiz:)',
  succesAlert: "Murojaatingiz uchun rahmat! Mutaxassizlarimiz tez orada siz bilan bog'lanishadi.",
  submit: `Jo'natish`,
  requestHasBeenSent: 'So‘rovingiz muvaffaqiyatli yuborildi!',
  contactYou: (value: string | ReactNode) =>
    `<p>Murojaatingiz uchun katta rahmat! Mutaxassislarimiz sizning <strong>${value}</strong> raqamingizga tez orada aloqaga chiqishadi.<p>`,
}
