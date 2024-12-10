
export const KCL_DEFAULT_LENGTH = `5`
export const KCL_DEFAULT_DEGREE = `360`


export const schema = {
  commandsCommandBarSchema: {
    'Enter sketch': {},
    'Export': {
      type: 'OutputTypeKey',
      storage: 'StorageUnion'
    },
    'Make': {
      machine: 'MachineInfoResponse',
    },
    'Extrude': {
      selection: 'Selections',
      distance: 'KclCommandValue',
    },
    'Loft': {
      selection: 'Selections',
    },
    'Revolve': {
      selection: 'Selections',
      angle: 'KclCommandValue'
    },
    'Fillet': {
      // todo
      selection: 'Selections',
      radius: 'KclCommandValue'
    },
    'Offset plane': {
      plane: 'Selections',
      distance: 'KclCommandValue'
    },
    'change tool': {
      tool: 'SketchTool',
    },
    'Text-to-CAD': {
      prompt: 'string',
    },
  },
  projectsCommandBarSchema: {
    'Read projects': {},
    'Create project': {
      'name': 'string'
    },
    'Open project': {
      'name': 'string'
    },
    'Delete project': {
      'name': 'string'
    },
    'Rename project': {
      'oldName': 'string',
      'newName': 'string'
    },
  },
}

export const config = {
  commandsCommandBarConfigArray: [
    {
      name: 'Enter sketch',
      description: 'Enter sketch mode.',
      icon: 'sketch',
    },
    {
      name: 'change tool',
      description: 'Start drawing straight lines.',
      icon: 'line',
      displayName: 'Line',
      args: {
        tool: {
          defaultValue: 'line',
          required: true,
          skip: true,
          inputType: 'string',
        },
      },
    },
    {
      name: 'Export',
      description: 'Export the current model.',
      icon: 'floppyDiskArrow',
      needsReview: true,
      args: {
        type: {
          inputType: 'options',
          defaultValue: 'gltf',
          required: true,
          options: [
            { name: 'glTF', isCurrent: true, value: 'gltf' },
            { name: 'OBJ', isCurrent: false, value: 'obj' },
            { name: 'STL', isCurrent: false, value: 'stl' },
            { name: 'STEP', isCurrent: false, value: 'step' },
            { name: 'PLY', isCurrent: false, value: 'ply' },
          ],
        },
        storage: {
          inputType: 'options',
          defaultValue: (c: any) => {
            switch (c.argumentsToSubmit.type) {
              case 'gltf':
                return 'embedded'
              case 'stl':
                return 'ascii'
              case 'ply':
                return 'ascii'
              default:
                return undefined
            }
          },
          skip: true,
          required: (commandContext: any) =>
            ['gltf', 'stl', 'ply'].includes(
              commandContext.argumentsToSubmit.type as any
            ),
          options: (commandContext: any) => {
            const type = commandContext.argumentsToSubmit.type as any

            switch (type) {
              case 'gltf':
                return [
                  { name: 'embedded', isCurrent: true, value: 'embedded' },
                  { name: 'binary', isCurrent: false, value: 'binary' },
                  { name: 'standard', isCurrent: false, value: 'standard' },
                ]
              case 'stl':
                return [
                  { name: 'binary', isCurrent: false, value: 'binary' },
                  { name: 'ascii', isCurrent: true, value: 'ascii' },
                ]
              case 'ply':
                return [
                  { name: 'ascii', isCurrent: true, value: 'ascii' },
                  {
                    name: 'binary_big_endian',
                    isCurrent: false,
                    value: 'binary_big_endian',
                  },
                  {
                    name: 'binary_little_endian',
                    isCurrent: false,
                    value: 'binary_little_endian',
                  },
                ]
              default:
                return []
            }
          },
        },
      },
    },
    {
      name: 'Extrude',
      description: 'Pull a sketch into 3D along its normal or perpendicular.',
      icon: 'extrude',
      needsReview: true,
      args: {
        selection: {
          inputType: 'selection',
          selectionTypes: ['solid2D', 'segment'],
          multiple: false,
          required: true,
          skip: true,
        },
        distance: {
          inputType: 'kcl',
          defaultValue: KCL_DEFAULT_LENGTH,
          required: true,
        },
      },
    },
    {
      name: 'Loft',
      description: 'Create a 3D body by blending between two or more sketches',
      icon: 'loft',
      needsReview: true,
      args: {
        selection: {
          inputType: 'selection',
          selectionTypes: ['solid2D'],
          multiple: true,
          required: true,
          skip: false,
        },
      },
    },
    {
      name: 'Revolve',
      description:
        'Create a 3D body by rotating a sketch region about an axis.',
      icon: 'revolve',
      needsReview: true,
      args: {
        selection: {
          inputType: 'selection',
          selectionTypes: ['solid2D', 'segment'],
          multiple: false,
          required: true,
          skip: true,
        },
        angle: {
          inputType: 'kcl',
          defaultValue: KCL_DEFAULT_DEGREE,
          required: true,
        },
      },
    }



  ],
  commandsCommandBarConfig: {
    'Enter sketch': {
      description: 'Enter sketch mode.',
      icon: 'sketch',
    },
    'change tool': [
      {
        description: 'Start drawing straight lines.',
        icon: 'line',
        displayName: 'Line',
        args: {
          tool: {
            defaultValue: 'line',
            required: true,
            skip: true,
            inputType: 'string',
          },
        },
      },
      {
        description: 'Start drawing an arc tangent to the current segment.',
        icon: 'arc',
        displayName: 'Tangential Arc',
        args: {
          tool: {
            defaultValue: 'tangentialArc',
            required: true,
            skip: true,
            inputType: 'string',
          },
        },
      },
      {
        description: 'Start drawing a rectangle.',
        icon: 'rectangle',
        displayName: 'Rectangle',
        args: {
          tool: {
            defaultValue: 'rectangle',
            required: true,
            skip: true,
            inputType: 'string',
          },
        },
      },
    ],
    'Export': {
      description: 'Export the current model.',
      icon: 'floppyDiskArrow',
      needsReview: true,
      args: {
        type: {
          inputType: 'options',
          defaultValue: 'gltf',
          required: true,
          options: [
            { name: 'glTF', isCurrent: true, value: 'gltf' },
            { name: 'OBJ', isCurrent: false, value: 'obj' },
            { name: 'STL', isCurrent: false, value: 'stl' },
            { name: 'STEP', isCurrent: false, value: 'step' },
            { name: 'PLY', isCurrent: false, value: 'ply' },
          ],
        },
        storage: {
          inputType: 'options',
          defaultValue: (c: any) => {
            switch (c.argumentsToSubmit.type) {
              case 'gltf':
                return 'embedded'
              case 'stl':
                return 'ascii'
              case 'ply':
                return 'ascii'
              default:
                return undefined
            }
          },
          skip: true,
          required: (commandContext: any) =>
            ['gltf', 'stl', 'ply'].includes(
              commandContext.argumentsToSubmit.type as any
            ),
          options: (commandContext: any) => {
            const type = commandContext.argumentsToSubmit.type as any

            switch (type) {
              case 'gltf':
                return [
                  { name: 'embedded', isCurrent: true, value: 'embedded' },
                  { name: 'binary', isCurrent: false, value: 'binary' },
                  { name: 'standard', isCurrent: false, value: 'standard' },
                ]
              case 'stl':
                return [
                  { name: 'binary', isCurrent: false, value: 'binary' },
                  { name: 'ascii', isCurrent: true, value: 'ascii' },
                ]
              case 'ply':
                return [
                  { name: 'ascii', isCurrent: true, value: 'ascii' },
                  {
                    name: 'binary_big_endian',
                    isCurrent: false,
                    value: 'binary_big_endian',
                  },
                  {
                    name: 'binary_little_endian',
                    isCurrent: false,
                    value: 'binary_little_endian',
                  },
                ]
              default:
                return []
            }
          },
        },
      },
    },
    'Make': {
      hide: 'web',
      displayName: 'Make',
      description:
        'Export the current part and send to a 3D printer on the network.',
      icon: 'printer3d',
      needsReview: true,
      args: {
        machine: {
          inputType: 'options',
          required: true,
          valueSummary: (machine: any) =>
            machine.make_model.model ||
            machine.make_model.manufacturer ||
            'Unknown Machine',
          options: (commandBarContext: any) => {
            return Object.values(
              commandBarContext.machineManager?.machines || []
            ).map((machine: any) => ({
              name:
                `${machine.id} (${
                  machine.make_model.model || machine.make_model.manufacturer
                }) (${machine.state.state})` +
                (machine.hardware_configuration &&
                machine.hardware_configuration.type !== 'none' &&
                machine.hardware_configuration.config.nozzle_diameter
                  ? ` - Nozzle Diameter: ${machine.hardware_configuration.config.nozzle_diameter}`
                  : '') +
                (machine.hardware_configuration &&
                machine.hardware_configuration.type !== 'none' &&
                machine.hardware_configuration.config.filaments &&
                machine.hardware_configuration.config.filaments[0]
                  ? ` - ${
                      machine.hardware_configuration.config.filaments[0].name
                    } #${
                      machine.hardware_configuration.config &&
                      machine.hardware_configuration.config.filaments[0].color?.slice(
                        0,
                        6
                      )
                    }`
                  : ''),
              isCurrent: false,
              disabled: machine.state.state !== 'idle',
              value: machine,
            }))
          },
          defaultValue: (commandBarContext: any) => {
            return Object.values(
              commandBarContext.machineManager.machines || []
            )[0] as any
          },
        },
      },
    },
    'Extrude': {
      description: 'Pull a sketch into 3D along its normal or perpendicular.',
      icon: 'extrude',
      needsReview: true,
      args: {
        selection: {
          inputType: 'selection',
          selectionTypes: ['solid2D', 'segment'],
          multiple: false,
          required: true,
          skip: true,
        },
        distance: {
          inputType: 'kcl',
          defaultValue: KCL_DEFAULT_LENGTH,
          required: true,
        },
      },
    },
    'Loft': {
      description: 'Create a 3D body by blending between two or more sketches',
      icon: 'loft',
      needsReview: true,
      args: {
        selection: {
          inputType: 'selection',
          selectionTypes: ['solid2D'],
          multiple: true,
          required: true,
          skip: false,
        },
      },
    },
    'Revolve': {
      description:
        'Create a 3D body by rotating a sketch region about an axis.',
      icon: 'revolve',
      needsReview: true,
      args: {
        selection: {
          inputType: 'selection',
          selectionTypes: ['solid2D', 'segment'],
          multiple: false,
          required: true,
          skip: true,
        },
        angle: {
          inputType: 'kcl',
          defaultValue: KCL_DEFAULT_DEGREE,
          required: true,
        },
      },
    },
    'Offset plane': {
      description: 'Offset a plane.',
      icon: 'plane',
      args: {
        plane: {
          inputType: 'selection',
          selectionTypes: ['plane'],
          multiple: false,
          required: true,
          skip: true,
        },
        distance: {
          inputType: 'kcl',
          defaultValue: KCL_DEFAULT_LENGTH,
          required: true,
        },
      },
    },
    'Fillet': {
      description: 'Fillet edge',
      icon: 'fillet',
      status: 'development',
      needsReview: true,
      args: {
        selection: {
          inputType: 'selection',
          selectionTypes: ['segment', 'sweepEdge', 'edgeCutEdge'],
          multiple: true,
          required: true,
          skip: false,
          warningMessage:
            'Fillets cannot touch other fillets yet. This is under development.',
        },
        radius: {
          inputType: 'kcl',
          defaultValue: KCL_DEFAULT_LENGTH,
          required: true,
        },
      },
    },
    'Text-to-CAD': {
      description: 'Use the Zoo Text-to-CAD API to generate part starters.',
      icon: 'chat',
      args: {
        prompt: {
          inputType: 'text',
          required: true,
        },
      },
    },
  },
  projectsCommandBarConfig: {
    'Open project': {
      icon: 'arrowRight',
      description: 'Open a project',
      args: {
        name: {
          inputType: 'options',
          required: true,
          options: [],
          optionsFromContext: (context: any) =>
            context.projects.map((p: any) => ({
              name: p.name!,
              value: p.name!,
            })),
        },
      },
    },
    'Create project': {
      icon: 'folderPlus',
      description: 'Create a project',
      args: {
        name: {
          inputType: 'string',
          required: true,
          defaultValueFromContext: (context: any) => context.defaultProjectName,
        },
      },
    },
    'Delete project': {
      icon: 'close',
      description: 'Delete a project',
      needsReview: true,
      reviewMessage: ({ argumentsToSubmit }: any) => ({
        heading: 'Are you sure you want to delete?',
        message: `This will permanently delete the project "${argumentsToSubmit.name}" and all its contents.`,
      }),
      args: {
        name: {
          inputType: 'options',
          required: true,
          options: [],
          optionsFromContext: (context: any) =>
            context.projects.map((p: any) => ({
              name: p.name!,
              value: p.name!,
            })),
        },
      },
    },
    'Rename project': {
      icon: 'folder',
      description: 'Rename a project',
      needsReview: true,
      args: {
        oldName: {
          inputType: 'options',
          required: true,
          options: [],
          optionsFromContext: (context: any) =>
            context.projects.map((p: any) => ({
              name: p.name!,
              value: p.name!,
            })),
        },
        newName: {
          inputType: 'string',
          required: true,
          defaultValueFromContext: (context: any) => context.defaultProjectName,
        },
      },
    },
  },
}
