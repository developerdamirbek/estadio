import { BonusCourses } from '@/modules/BonusCourses'
import { EdFixBenefits } from '@/modules/EdFixBenefits'
import { EmergingCareerOptions } from '@/modules/EmergingCareerOptions'
import { FreeConsultation } from '@/modules/FreeConsultation'
import { HelperCallback } from '@/modules/HelperCallback'
import { Instructions } from '@/modules/Instructions'
import { Partners } from '@/modules/Partners'
import { ProfessionFinder } from '@/modules/ProfessionFinder'
import { ProfessionMatcher } from '@/modules/ProfessionMatcher'
import { QuestionsAndSupport } from '@/modules/QuestionsAndSupport'
import { TextFeedbacks } from '@/modules/TextFeedbacks'
import { TopRatedCourses } from '@/modules/TopRatedCourses'
import { VideoFeedbacks } from '@/modules/VideoFeedbacks'
import { WhyEdFix } from '@/modules/WhyEdFix'
import { YourCourses } from '@/modules/YourCourses'
import { CoursesWidget } from '@/widgets/CoursesWidget'

export const MainPageModules = {
  [BonusCourses.displayName]: BonusCourses,
  [CoursesWidget.displayName]: CoursesWidget,
  [EdFixBenefits.displayName]: EdFixBenefits,
  [EmergingCareerOptions.displayName]: EmergingCareerOptions,
  [FreeConsultation.displayName]: FreeConsultation,
  [HelperCallback.displayName]: HelperCallback,
  [Instructions.displayName]: Instructions,
  [Partners.displayName]: Partners,
  [ProfessionFinder.displayName]: ProfessionFinder,
  [ProfessionMatcher.displayName]: ProfessionMatcher,
  [QuestionsAndSupport.displayName]: QuestionsAndSupport,
  [TextFeedbacks.displayName]: TextFeedbacks,
  [TopRatedCourses.displayName]: TopRatedCourses,
  [VideoFeedbacks.displayName]: VideoFeedbacks,
  [WhyEdFix.displayName]: WhyEdFix,
  [YourCourses.displayName]: YourCourses,
}

// TODO: replace with real data
export const mainPageModulesSort = [
  ProfessionMatcher.displayName,
  WhyEdFix.displayName,
  CoursesWidget.displayName,
  YourCourses.displayName,
  HelperCallback.displayName,
  BonusCourses.displayName,
  EdFixBenefits.displayName,
  VideoFeedbacks.displayName,
  TextFeedbacks.displayName,
  ProfessionFinder.displayName,
  FreeConsultation.displayName,
  TopRatedCourses.displayName,
  Instructions.displayName,
  EmergingCareerOptions.displayName,
  Partners.displayName,
  QuestionsAndSupport.displayName,
]
