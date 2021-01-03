const resources = {
  en: {
    translation: {
      common: {
        loading: "Initializing",
        name: "Name",
        description: "Description",
        iconClass: "Icon Class",
        cancel: "Cancel",
        save: "Save"
      },
      headerNavItems: {
        administration: "Administration",
        dashboard: "Dashboard",
        projects: "Projects",
        changeLog: "Change Log",
        newChangeLogEntry: "New Change Log Entry",
        newProject: "New Project",
        openNewMenu: "Open New Menu",
        openUserMenu: "Open User Menu",
        profile: "Profile",
        settings: "Settings",
        signOut: "Sign Out",
        userMenu: "User Menu"
      },
      footer: {
        apiDocumentation: "API Documentation"
      },
      login: {
        username: "User Name",
        password: "Password",
        signIn: "Sign in"
      },

      admin: {
        title: "Administration",
        crud: {
          itemAdded: "{{keyValue}} was added to the {{collectionName}}",
          newAction: "New {{itemName}}"
        },
        sidebar: {
          settings: "Settings",
          userManagement: "User Management"
        },
        configurationSystems: {
          collectionName: "Configuration Systems",
          itemName: "Configuration System",
          errors: {
            uniqueViolation: "A configuration system with the same name already exists"
          }
        }
      },

      profile: {
        displayName: "Display Name",
        userName: "User Name",
        userType: "User Type",
        externalId: "External ID",
        emailAddress: "Email Address",
        groups: "Groups"
      },

      cookieCutter: {
        dashboard: "Dashboard",
        project: "Project",
        selectType: "Select a type",
        type: "Type",
        errormsg: "The cookie cutter name you entered already exists",
        itemTitle: "Title",
        cookieTitle: "Cookie Cutter",
        cookieTitles: "Cookie Cutters",
        projectType: "Project Type",
        selectProjectType: "Select a Project Type",
      },
      add: {
        step1: "Step 1: Details",
        step2: "Step 2: Automations",
        step3: "Step 3: Dependencies",
        step4: "Step 4: Links",
        step5: "Step 5: Finish",
      },
      addAutomation: {
        message:
          "The following automation tasks are available on new project setup:",
        createProject: "Create Project in Sentry",
        createGitlab: "Create GitLab Project",
        repositoryCookie: "Repository Cookie Cutter",
        grafanaCookie: "Grafana Cookie Cutter",
        placeholder: "Select Cookie Cutter",
      },
      addDependencies: {
        team: "Team",
        dataCenter: "Data Center",
        project: "Project",
        message:
          "Select other projects that are immediate dependencies of this project:",
        noProject: "No projects defined",
      },
      addDetails: {
        message:
          "The project name should uniquely identify the project within the team but can be duplicated across teams.",
        projectName: "Project Name",
        ownedBy: "Owned By",
        selectTeam: "Select Team",
        projectType: "Project Type",
        selectProjectType: "Select Project Type",
        dataCenter: "Data Center",
        selectDataCenter: "Select Data Center",
        configurationSystem: "Configuration System",
        selectConfigurationSystem: "Select Configuration System",
        deploymentType: "Deployment Type",
        selectDeploymentType: "Select Deployment Type",
        orchestrationSystem: "Orchestration System",
        selectOrchestrationSystem: "Select Orchestration System",
      },
      addFinish: {
        message:
          "Adding the project and performing automation actions:",
        error: "ERROR",
        projectOverview: "Project Overview",
        name: "Name",
        slug: "Slug",
        description: "Description",
        ownedBy: "Owned By",
        projectType: "Project Type",
        dataCenter: "Data Center",
        configurationSystem: "Configuartion System",
        deploymentType: "Deployment Type",
        orchestrationSystem: "Orchestration System",
        automations: "Automations",
        setupSentry: "Setup Project in Sentry",
        setupGitlab: "Setup Project in GitLab",
        repoCookieCutter: "Repository Cookie Cutter:",
        grafanaCookie: "Grafana Cookie Cutter:",
        dependencies: "Dependencies",
        noDependencies: "No dependencies specified",
        noLinks: "No links specified",
        links: "Links",
      },
      addLinks: {
        message: "Add links to the project that will show up in the project inventory and on the project details page:",
        selectLinkType: "Select Link Type",
        linkType: "Link Type",
        linkURL: "Link URL",
        url: "URL",
        noSerice: "No Project Links",
        addFirstLink: "Use the inline form above to add the first link.",
      },
      inventory: {
        name: "Name",
        projects: "Projects",
        dataCenter: "Data Center",
        team: "Team",
        projectType: "Project Type",
        project: "Project",
        edit: "Edit",
      },
      dataCenter: {
        dataCenter: "Data Center",
        dataCenters: "Data Centers",
        iconClass: "Icon Class",
        message: "The Data Center you entered already exists",
      },
      deploymentType: {
        title: "Deployment Type",
        titles: "Deployment Types",
        iconClass: "Icon Class",
        message: "The Deployment Type you entered already exists",
      },
      environment: {
        title: "Environment Type",
        titles: "Environment Types",
        iconClass: "Icon Class",
        message: "The Environment you entered already exists",
      },
      groups: {
        name: "Group Name",
        internal: "internal",
        ldap: "ldap",
        groupType: "Group Type",
        errorHelp:
          "External ID is required when Group Type is LDAP, otherwise it must be empty",
        externalId: "External ID",
        permissions: "Permissions",
        message: "The Group you entered already exists",
        title: "Group",
        titles: "Groups",
        iconClass: "Icon Class",
      },
      orchestration: {
        iconClass: "Icon Class",
        message: "The Orchestration System you entered already exists",
        title: "Orchestration System",
        titles: "Orchestration Systems",
      },
      projectLinkType: {
        title: "Project Link Type",
        titles: "Project Link Types",
        iconClass: "Icon Class",
        message: "The Project Link Type you entered already exists"
      },
      projectType: {
        title: "Project Type",
        titles: "Project Types",
        iconClass: "Icon Class",
        message: "The Project Type you entered already exists",
        slug: "Slug",
      },
      teams: {
        name: "Team name",
        slug: "Slug",
        group: "Group",
        title: "Team",
        titles: "Teams",
        iconClass: "Icon Class",

        message: "TThe Team Name you entered already exists",
      },
    },
  },
}

export default resources
