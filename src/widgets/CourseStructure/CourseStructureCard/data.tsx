import CloseGroup from '@/assets/icons/close-group.svg'
import HomeWork from '@/assets/icons/homework.svg'
import VideoChat from '@/assets/icons/video-chat.svg'
import VideoLesson from '@/assets/icons/video-lesson.svg'
import mainDictionary from '@/dictionary'

export const courseStructureData = [
  {
    id: 1,
    title: mainDictionary.couseStructureCloseGroup,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    color: 'green',
    icon: CloseGroup,
  },
  {
    id: 2,
    title: mainDictionary.courseStructureOnlineMeeting,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    color: 'brand',
    icon: VideoChat,
  },
  {
    id: 3,
    title: mainDictionary.courseStructureVideoLessons,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    color: 'badge',
    icon: VideoLesson,
  },
  {
    id: 3,
    title: mainDictionary.courseStructureHomeWork,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    color: 'blue',
    icon: HomeWork,
  },
]
