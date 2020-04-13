export default {
  errors: {
    error: 'Error',
    generalError: 'The app is experiencing an unexpected error, please make sure that you have an Internet connection and retry.',
    connectionError: 'Cannot contact server',
    correctFields: 'Please correct the indicated fields'
  },
  common: {
    next: 'Next',
    cancel: 'Cancel',
    accept: 'Accept',
    reject: 'Reject',
    close: 'Close',
    update: 'Update',
    delete: 'Delete',
    yes: 'Yes',
    no: 'No',
    info: 'Info',
    privacy: 'Privacy',
    consent: 'Consent',
    retry: 'Retry',
    start: 'Start',
    send: 'Send',
    back: 'Back'
  },
  layouts: {
    consent: 'New study',
    home: 'Mobistudy',
    registration: 'Register',
    task: 'Task',
    close: 'Close'
  },
  passwordCheck: {
    ok: 'All OK',
    tooShort: 'Password is too short.',
    tooSimple: 'The password is too simple.',
    noEmail: 'Password cannot contain email.',
    minChars: 'Password must contain at least {minLength} characters.',
    maxChars: 'Password must contain less than {maxLength} characters.',
    noRepeat: 'Password may not contain sequences of three or more repeated characters.',
    lowerCase: 'The password must contain at least one lowercase letter.',
    upperCase: 'The password must contain at least one uppercase letter.',
    number: 'The password must contain at least one number',
    specialChar: 'The password must contain at least one special character.',
    noKeysRow: 'Straight rows of keys are easy to guess.',
    noShortPattern: 'Short keyboard patterns are easy to guess.',
    noRepeat2: 'Repeats like "aaa" are easy to guess.',
    noRepeat3: 'Repeats like "abcabcabc" are only slightly harder to guess than "abc".',
    noSequence: 'Sequences like abc or 6543 are easy to guess.',
    noRecentYear: 'Recent years are easy to guess.',
    noDate: 'Dates are often easy to guess.',
    noTop10: 'This is a top-10 common password.',
    noTop100: 'This is a top-100 common password.',
    noCommonPwd: 'This is a very common password.',
    noCommonPwdSimilar: 'This is similar to a commonly used password.',
    no1Word: 'A word by itself is easy to guess.',
    noNames: 'Names and surnames by themselves are easy to guess.'
  },
  accountMgmt: {
    email: 'Email',
    emailRequiredError: 'A valid email address is required.',
    password: 'Password',
    passwordRequiredError: 'Password is required',
    confirmPassword: 'Confirm Password',
    confirmPasswordError: 'Passwords must match',
    register: 'Register',
    deleteAccount: 'Delete Account',
    deleteShort: "You can permanently delete your account, Mobistudy won't ever collect anymore data unless you create a new account.",
    login: {
      login: 'Login',
      logout: 'Logout',
      logoutShort: 'If you logout from the Mobistudy App no data will be collected.',
      lostpw: 'Lost Password',
      noAcc: 'No account yet? Register in 3 steps!',
      loginError: 'Cannot login',
      loginErrorCredentials: 'Cannot login, wrong credentials.'
    },
    resetPassword: {
      resetPassword: 'Reset Password',
      resetPasswordError: 'Cannot reset password',
      newPassword: 'New password',
      resetPasswordShort: "To change your password you'll get a mail with a verification token, enter the token on the next screen and choose a new password. Warning! this will also log you out.",
      newPasswordExplanation: 'If you\'re registered in the system, you should receive an email shortly. Please copy/paste the token from your email onto this form. If you change your password on the Mobistudy web page instead, then tap on cancel and login with your new password.',
      token: 'Token',
      tokenHint: 'As received on your email.',
      tokenError: 'A token is required.',
      confirmPwd: 'Confirm Password',
      pwdMustMatch: 'Passwords do not match',
      changePassword: 'Change Password',
      changePasswordError: 'Cannot change password',
      passwordChanged: 'New password set',
      passwordChangedExplanation: 'Now you can login with your new password.'
    },
    registration: {
      signUp: 'Sign up',
      termsAndConditions: 'Terms and Condtions',
      createAccount: 'Create Account',
      createProfile: 'Create Profile',
      privacyPolicy: 'Privacy Policy',
      registrationError: 'Registration failed',
      registrationErrorUserExists: 'User already exists'
    },
    profile: {
      profile: 'Profile',
      firstName: 'First Name',
      firstNameError: 'First name is required.',
      surname: 'Surname',
      surnameError: 'Surname is required.',
      language: 'Language',
      languageError: 'Language is required.',
      languages: {
        en: 'English',
        sv: 'Swedish'
      },
      country: 'Country',
      countryError: 'Country is required.',
      countries: {
        gb: 'United Kingdom',
        se: 'Sweden'
      },
      sex: 'Sex',
      sexes: {
        male: 'Male',
        female: 'Female',
        other: 'Other'
      },
      sexError: 'Please select one option.',
      dateOfBirth: 'Date of Birth',
      dateOfBirthError: 'Date of birth is required',
      conditions: 'Long-term conditions',
      conditionsSearch: 'Type a word to search for a condition',
      conditionSearchError: 'Cannot find disease',
      noResults: 'No results',
      medications: 'Long-term medications',
      medicationSearchError: 'Cannot find medication',
      smoke: 'Do you smoke?',
      lifestyle: 'Do you have an active lifestyle?'
    }
  },
  studies: {
    newStudy: 'New study available',
    checkNewStusy: 'Check it',
    newStudyInvite: 'You are invited to a new study!',
    newStudyExtraCriteria: 'Answer the following to know if you are eligible',
    notEligible: 'You are not eligible for this study',
    noStudies: 'You are currently not participating in any study.',
    joinStudy: 'Join',
    discardStudy: 'Discard',
    discardStudyConfirm: 'Are you sure you want to discard this study?',
    privacyPolicy: 'Privacy Policy',
    activeStudies: 'Active studies',
    noActiveStudies: 'No active studies found.',
    previousStudies: 'Previous studies',
    studyCompletedHeadline: 'You have completed a study',
    studyCompletedText: 'You have completed all the tasks for the {studyname}.<br><br>Thanks very much for this!<br><br>Please, be aware that some studies may require some further action, check the study description in the "Manage Studies" menu.',
    principalInvestigators: 'Principal investigators',
    investigatorName: 'Name',
    institution: 'Institution',
    institutions: 'Involved institutions',
    contact: 'Contact details',
    studyDetails: 'Study details',
    studyTitle: 'Study title',
    dataAccess: {
      anonymised: 'This institution will access your data in an anonymised way',
      noAccess: 'This institution will have no access to your data',
      full: 'This institution will access your data',
      reason: 'Reason'
    },
    tasks: {
      noPendingTasks: 'No tasks pending',
      pendingTasks: "Today's pending tasks",
      missedTasks: 'Missed tasks',
      noMissedTasks: 'No tasks missed',
      dataQuery: {
        title: 'Data query',
        shortDescription: 'Extract data from your phone',
        dataQueryExplanation: 'This data has been extracted from your phone. If you agree to send it, tap on Send.'
      },
      form: {
        title: '{formname} form',
        shortDescription: 'Answer a few questions',
        formCompleted: 'Form completed. Thank you.',
        freeTextExplanation: 'Type your answer'
      },
      smwt: {
        title: 'Six Minute Walk Test (6MWT)',
        shortTitle: '6MWT',
        introduction: 'Introduction',
        instructions: 'Instructions',
        description: 'This task is to perform a Six Minute Walk Test. This app is able to send the results of your tests to a server hosted by the University of Malmö. The data is made available to the personnel of the Skånes Universitetssjukhus so that doctors and nurses are able to review them.',
        shortDescription: 'Perform a Six Minute Walk Test',
        smwtExplanation: 'Computed distance walked during a Six Minute Walk Test. If you agree to send it, tap on Send.',
        smwtNote: 'Please read the instructions carefully. The accuracy of the test depends on the instructions being followed as closely as possible.',
        noteGPS: 'Note: This test uses the GPS of your phone and therefore requires internet connection. If you experience errors during the test, pleae make sure that your phone is connected to the internet.',
        smwtInstructions: [
          { i: 'The object of this test is to walk as far as possible for 6 minutes.' },
          { i: 'It is important that you try to walk as straight as possible. Try to avoid stairs and/or steep hills' },
          { i: 'If possible, try to avoid areas with many tall buildings and / or trees as these can affect the GPS function of your phone.' },
          { i: 'When you are ready to start the test, press the "Start"-button.' },
          { i: 'You may slow down if necessary.' },
          { i: 'The test will automaticly stop after 6 minutes, and you will be asked to send the collected data. If you need to complete the test earlier, press the "Complete"-button.' },
          { i: 'Try not to talk during the test, as this may affect your performance.' },
          { i: 'Stop immediately if you have any chest pain or dizziness.' },
          { i: 'Hold your phone still in one hand, avoid shaking or twisting it until the test is finished.' },
          { i: 'You can use an arm band if needed, but do not switch off the screen!' }
        ],
        smwtCompleted: 'Test completed. Thank you!'
      }
    },
    consent: {
      itemsExplanation: 'You can opt-in or opt-out of these items whenever you want',
      OSpermission: 'This item requires the app to access some functionalities on the phone.',
      giveOSPermission: 'Give permission to this app',
      OSPermissionGiven: 'Permission given',
      OSPermissionNotGiven: 'Could not get permission',
      remindersConsent: 'I want to receive reminders about the tasks of this study',
      remindersOSPermission: 'You need to allow the app to send reminders.',
      giveRemindersOSPermission: 'Allow reminders',
      informedConsent: 'Informed consent',
      consentExplanation: 'Consent to the following items to join the study. You do not have to consent to all of them, however some items may be required to join the study. When an item requires access to the phone\'s functions, you can tap the button to grant access to this app.',
      updateConsent: 'Update consent',
      consentUpdated: 'Consent updated',
      withdraw: 'Withdraw from the study',
      joinStudy: 'Join study'
    }
  },
  info: {
    about: 'About',
    introduction: 'Introduction',
    introductionFull: `Mobistudy is an open iniative that allows citizens to help \
    health research with their data. Participants download an app (iOS or Android) \
    and, after registering and filling-in a short profile, they are proposed with \
    research studies. If they find a study they may be interested in, they are \
    guided through an easy-to-understand informed consent process. Upon acceptance, \
    participants are then proposed "tasks", such as filling forms and questionnaires \
    and provide their health data through Google Fit or Apple HealthKit.<br><br>
    Mobistudy is currently managed by the Internet Of Things and People research\
    center, Malmö University.`
  },
  healthDataTypes: {
    steps: 'steps',
    weight: 'weight',
    height: 'height',
    activity: 'activity',
    heart_rate: 'heart rate',
    heart_rate_variability: 'heart rate variability',
    calories: 'calories',
    distance: 'distance'
  }
}
