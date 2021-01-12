'use strict'

export default {
  studies: {
    tasks: {
      miband3: {
        title: 'Activity tracker download',
        shortTitle: 'Activity tracker',
        shortDescription: 'Extract data from your activity tracker',
        introductionSlides: [
          { title: 'Instruction',
            img: 'https://picsum.photos/200',
            description: 'In this task you will connect to your MiBand smart bracelet and download your activity data from it including steps, heart rate, activity type and intensity.'
          },
          { title: 'Instruction',
            img: 'https://picsum.photos/200',
            description: 'In order for the phone to connect to the MiBand, please, make sure that Blueetooth is activated on the phone, that the Miband is charged and nearby the phone.'
          },
          { title: 'Instruction',
            img: 'https://picsum.photos/200',
            description: 'If it is the first time you connect to the MiBand, the MiBand will ask you to confirm the connection to the phone by tapping on it. Please tap on the bracelet when you feel the vibration on the wrist. To proceed, tap on "Connect" below.'
          }
        ],
        connect: 'Connect',
        searching: 'Searching for nearby Miband',
        searchFailed: 'There was a problem while searching for your MiBand, do you want to retry?',
        noDeviceTitle: 'No MiBand found',
        noDevice: 'Could not find any MiBand. Please make sure Bluetooth is activated on your phone. Would you like to search again?',
        moreDevices: 'More than one MiBand device was found. The nearest in proximity is the first device in the list. Please tap on one to connect to it.',
        tap: 'Tap the activity tracker!',
        connectionFail: 'Cannot connect to the device, would you like to retry?',
        connecting: 'Connecting to the Miband',
        activityTypes: {
          walk: 'Walking',
          charging: 'charging',
          activity_high: 'intense activity',
          sleep: 'sleeping',
          unknown: 'Unknown'
        },
        dataDownload: 'Downloading data',
        dataDownloadError: 'Could not retrieve data from the band, please retry or cancel.',
        dataSending: 'Sending data',
        chartsIntro: 'The following charts summarize the data that have been retrieved from the band. Tap on "Send" to share these data with the research team or tap on "Skip" to avoid sending these data.',
        lineChart: 'Activity over time',
        hrs: 'heart rate',
        intensities: 'intensity',
        steps: 'steps',
        pieChart: 'Time spent in each activity',
        hours: 'hours'
      }
    }
  }
}