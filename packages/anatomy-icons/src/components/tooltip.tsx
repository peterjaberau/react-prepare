import { createComponent } from "../create-component"

export const TooltipAnatomy = createComponent((props) => {
  const { palette, ...rest } = props
  return (
    <svg width={1456} height={812} viewBox="0 0 1456 812" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <rect x={551} y={266} width={341} height={102} fill={palette[4]} />
      <path
        d="M606.165 329.39C604.176 329.39 602.434 329.065 600.939 328.415C599.457 327.765 598.3 326.79 597.468 325.49C596.636 324.19 596.201 322.565 596.162 320.615H599.73C599.769 321.863 600.068 322.89 600.627 323.696C601.186 324.502 601.953 325.106 602.928 325.509C603.916 325.899 605.06 326.094 606.36 326.094C607.777 326.094 608.915 325.912 609.773 325.548C610.644 325.184 611.281 324.69 611.684 324.066C612.087 323.429 612.288 322.721 612.288 321.941C612.288 320.979 612.015 320.186 611.469 319.562C610.936 318.925 610.15 318.366 609.11 317.885C608.083 317.391 606.835 316.89 605.366 316.383C603.806 315.837 602.421 315.187 601.212 314.433C600.016 313.666 599.074 312.743 598.385 311.664C597.696 310.572 597.351 309.285 597.351 307.803C597.351 305.333 598.151 303.448 599.75 302.148C601.362 300.848 603.539 300.198 606.282 300.198C608.115 300.198 609.63 300.491 610.826 301.076C612.035 301.661 612.971 302.532 613.634 303.689C614.297 304.833 614.732 306.256 614.94 307.96H611.352C611.235 307.062 610.988 306.282 610.611 305.619C610.234 304.943 609.682 304.423 608.954 304.059C608.239 303.682 607.283 303.494 606.087 303.494C604.462 303.494 603.195 303.838 602.285 304.527C601.388 305.216 600.939 306.25 600.939 307.628C600.939 308.447 601.102 309.162 601.427 309.773C601.765 310.384 602.363 310.962 603.221 311.508C604.079 312.054 605.314 312.639 606.926 313.263C608.096 313.718 609.22 314.173 610.299 314.628C611.378 315.083 612.34 315.61 613.185 316.208C614.03 316.793 614.7 317.527 615.194 318.411C615.688 319.282 615.935 320.374 615.935 321.687C615.961 324.157 615.142 326.062 613.478 327.401C611.814 328.727 609.376 329.39 606.165 329.39ZM620.427 329V298.677H624.035V307.725L623.723 313.79L623.898 315.506L623.586 314.121C623.742 312.938 624.067 311.827 624.561 310.787C625.068 309.747 625.803 308.902 626.765 308.252C627.74 307.602 628.994 307.277 630.528 307.277C632.543 307.277 634.097 307.875 635.189 309.071C636.281 310.267 636.827 312.087 636.827 314.531V329H633.2V315.72C633.2 313.991 632.914 312.717 632.342 311.898C631.783 311.079 630.749 310.67 629.241 310.67C628.084 310.67 627.077 311.014 626.219 311.703C625.361 312.379 624.633 313.296 624.035 314.453V329H620.427ZM650.948 329.293C649.076 329.293 647.432 328.87 646.015 328.025C644.611 327.18 643.512 325.938 642.719 324.3C641.939 322.649 641.549 320.628 641.549 318.236C641.549 315.974 641.965 314.024 642.797 312.386C643.629 310.748 644.76 309.493 646.19 308.622C647.633 307.738 649.245 307.296 651.026 307.296C652.963 307.296 654.634 307.738 656.038 308.622C657.455 309.493 658.547 310.748 659.314 312.386C660.081 314.024 660.464 315.974 660.464 318.236C660.464 320.628 660.035 322.649 659.177 324.3C658.332 325.938 657.188 327.18 655.745 328.025C654.302 328.87 652.703 329.293 650.948 329.293ZM651.026 326.094C652.768 326.094 654.159 325.444 655.199 324.144C656.239 322.844 656.759 320.875 656.759 318.236C656.759 315.714 656.246 313.796 655.219 312.483C654.205 311.157 652.781 310.494 650.948 310.494C649.219 310.494 647.835 311.157 646.795 312.483C645.768 313.796 645.254 315.714 645.254 318.236C645.254 320.784 645.774 322.734 646.814 324.086C647.867 325.425 649.271 326.094 651.026 326.094ZM665.387 329V307.706H668.468L668.858 315.896L668.429 314.784C668.52 313.978 668.696 313.14 668.956 312.269C669.229 311.398 669.612 310.585 670.106 309.831C670.613 309.064 671.257 308.447 672.037 307.979C672.83 307.511 673.798 307.277 674.942 307.277C675.163 307.277 675.371 307.29 675.566 307.316C675.774 307.342 675.976 307.374 676.171 307.414V311.255C675.846 311.151 675.501 311.086 675.137 311.06C674.786 311.021 674.455 311.001 674.143 311.001C673.506 311.001 672.862 311.125 672.212 311.372C671.562 311.619 670.958 312.015 670.399 312.561C669.84 313.094 669.378 313.79 669.014 314.648V329H665.387ZM686.729 329.293C685.078 329.293 683.817 328.87 682.946 328.025C682.088 327.167 681.659 325.951 681.659 324.378V312.834C681.659 312.418 681.743 312.035 681.912 311.684C682.081 311.32 682.328 311.086 682.653 310.982L681.659 308.564V307.901L682.536 301.544H685.247V323.774C685.247 324.606 685.442 325.171 685.832 325.47C686.222 325.756 686.891 325.899 687.84 325.899C688.529 325.899 689.114 325.899 689.595 325.899C690.076 325.886 690.577 325.86 691.097 325.821V329.02C690.382 329.15 689.641 329.228 688.874 329.254C688.12 329.28 687.405 329.293 686.729 329.293ZM678.558 310.982V307.706H690.921V310.982H678.558ZM710.826 329.351C708.85 329.351 707.134 328.902 705.678 328.005C704.222 327.108 703.098 325.834 702.305 324.183C701.512 322.532 701.115 320.589 701.115 318.353C701.115 316 701.518 314.004 702.324 312.366C703.143 310.728 704.268 309.48 705.698 308.622C707.141 307.751 708.785 307.316 710.631 307.316C712.399 307.316 713.901 307.66 715.136 308.349C716.371 309.025 717.313 309.929 717.963 311.06C718.626 312.191 718.977 313.439 719.016 314.804H715.448C715.422 314.284 715.311 313.77 715.116 313.263C714.921 312.756 714.629 312.301 714.239 311.898C713.849 311.482 713.348 311.151 712.737 310.904C712.139 310.644 711.418 310.514 710.573 310.514C708.61 310.501 707.16 311.183 706.224 312.561C705.288 313.939 704.82 315.831 704.82 318.236C704.82 320.81 705.34 322.773 706.38 324.125C707.42 325.477 708.98 326.153 711.06 326.153C711.866 326.153 712.588 325.971 713.225 325.607C713.862 325.243 714.369 324.768 714.746 324.183C715.136 323.598 715.344 322.974 715.37 322.311H718.938C718.899 323.65 718.522 324.853 717.807 325.919C717.092 326.985 716.13 327.823 714.921 328.434C713.712 329.046 712.347 329.351 710.826 329.351ZM731.576 329.293C729.704 329.293 728.059 328.87 726.642 328.025C725.238 327.18 724.14 325.938 723.347 324.3C722.567 322.649 722.177 320.628 722.177 318.236C722.177 315.974 722.593 314.024 723.425 312.386C724.257 310.748 725.388 309.493 726.818 308.622C728.261 307.738 729.873 307.296 731.654 307.296C733.591 307.296 735.261 307.738 736.665 308.622C738.082 309.493 739.174 310.748 739.941 312.386C740.708 314.024 741.092 315.974 741.092 318.236C741.092 320.628 740.663 322.649 739.805 324.3C738.96 325.938 737.816 327.18 736.373 328.025C734.93 328.87 733.331 329.293 731.576 329.293ZM731.654 326.094C733.396 326.094 734.787 325.444 735.827 324.144C736.867 322.844 737.387 320.875 737.387 318.236C737.387 315.714 736.873 313.796 735.846 312.483C734.832 311.157 733.409 310.494 731.576 310.494C729.847 310.494 728.462 311.157 727.422 312.483C726.395 313.796 725.882 315.714 725.882 318.236C725.882 320.784 726.402 322.734 727.442 324.086C728.495 325.425 729.899 326.094 731.654 326.094ZM746.015 329V307.706H749.096L749.486 315.74L749.135 314.121C749.304 312.86 749.655 311.716 750.188 310.689C750.734 309.649 751.495 308.824 752.47 308.213C753.458 307.589 754.699 307.277 756.194 307.277C758.17 307.277 759.704 307.888 760.796 309.11C761.901 310.319 762.454 312.126 762.454 314.531V329H758.827V315.72C758.827 314.511 758.69 313.536 758.417 312.795C758.157 312.054 757.735 311.515 757.15 311.177C756.578 310.839 755.811 310.67 754.849 310.67C753.692 310.67 752.671 310.988 751.787 311.625C750.916 312.262 750.201 313.14 749.642 314.258V329H746.015ZM774.25 329.293C772.599 329.293 771.338 328.87 770.467 328.025C769.609 327.167 769.18 325.951 769.18 324.378V312.834C769.18 312.418 769.265 312.035 769.434 311.684C769.603 311.32 769.85 311.086 770.175 310.982L769.18 308.564V307.901L770.058 301.544H772.768V323.774C772.768 324.606 772.963 325.171 773.353 325.47C773.743 325.756 774.413 325.899 775.362 325.899C776.051 325.899 776.636 325.899 777.117 325.899C777.598 325.886 778.098 325.86 778.618 325.821V329.02C777.903 329.15 777.162 329.228 776.395 329.254C775.641 329.28 774.926 329.293 774.25 329.293ZM766.08 310.982V307.706H778.443V310.982H766.08ZM790.785 329.293C788.848 329.293 787.145 328.87 785.676 328.025C784.22 327.18 783.089 325.938 782.283 324.3C781.477 322.649 781.074 320.634 781.074 318.256C781.074 315.967 781.49 314.004 782.322 312.366C783.154 310.728 784.298 309.474 785.754 308.603C787.21 307.732 788.867 307.296 790.726 307.296C792.572 307.296 794.152 307.693 795.465 308.486C796.791 309.279 797.811 310.416 798.526 311.898C799.241 313.367 799.592 315.129 799.579 317.183C799.579 317.599 799.566 317.943 799.54 318.216C799.514 318.489 799.495 318.775 799.482 319.074H784.701C784.792 321.414 785.377 323.189 786.456 324.398C787.548 325.594 788.939 326.192 790.629 326.192C792.059 326.192 793.164 325.893 793.944 325.295C794.737 324.684 795.237 323.904 795.445 322.955H798.994C798.903 324.307 798.487 325.457 797.746 326.406C797.018 327.355 796.056 328.077 794.86 328.571C793.664 329.052 792.306 329.293 790.785 329.293ZM786.631 316.344H795.933C795.907 314.524 795.458 313.094 794.587 312.054C793.716 311.014 792.384 310.494 790.59 310.494C788.705 310.494 787.275 311.138 786.3 312.425C785.325 313.699 784.792 315.46 784.701 317.709C784.805 317.176 785.013 316.819 785.325 316.637C785.65 316.442 786.085 316.344 786.631 316.344ZM804.325 329V307.706H807.406L807.796 315.74L807.445 314.121C807.614 312.86 807.965 311.716 808.498 310.689C809.044 309.649 809.804 308.824 810.779 308.213C811.767 307.589 813.009 307.277 814.504 307.277C816.48 307.277 818.014 307.888 819.106 309.11C820.211 310.319 820.763 312.126 820.763 314.531V329H817.136V315.72C817.136 314.511 817 313.536 816.727 312.795C816.467 312.054 816.044 311.515 815.459 311.177C814.887 310.839 814.12 310.67 813.158 310.67C812.001 310.67 810.981 310.988 810.097 311.625C809.226 312.262 808.511 313.14 807.952 314.258V329H804.325ZM832.56 329.293C830.909 329.293 829.648 328.87 828.777 328.025C827.919 327.167 827.49 325.951 827.49 324.378V312.834C827.49 312.418 827.575 312.035 827.744 311.684C827.913 311.32 828.16 311.086 828.485 310.982L827.49 308.564V307.901L828.368 301.544H831.078V323.774C831.078 324.606 831.273 325.171 831.663 325.47C832.053 325.756 832.723 325.899 833.672 325.899C834.361 325.899 834.946 325.899 835.427 325.899C835.908 325.886 836.408 325.86 836.928 325.821V329.02C836.213 329.15 835.472 329.228 834.705 329.254C833.951 329.28 833.236 329.293 832.56 329.293ZM824.39 310.982V307.706H836.753V310.982H824.39Z"
        fill={palette[0]}
      />
      <path
        d="M415.628 240.276C414.062 240.276 412.718 239.932 411.597 239.246C410.475 238.55 409.615 237.583 409.016 236.346C408.426 235.109 408.131 233.673 408.131 232.039C408.131 230.319 408.436 228.849 409.045 227.631C409.654 226.413 410.499 225.485 411.582 224.847C412.665 224.2 413.912 223.876 415.323 223.876C416.725 223.876 417.899 224.137 418.847 224.659C419.804 225.171 420.519 225.862 420.993 226.732C421.466 227.593 421.684 228.555 421.645 229.618H418.354C418.344 229.193 418.276 228.806 418.151 228.458C418.025 228.1 417.836 227.801 417.585 227.559C417.343 227.308 417.034 227.114 416.657 226.979C416.28 226.844 415.84 226.776 415.338 226.776C413.984 226.766 413.022 227.23 412.452 228.168C411.891 229.106 411.611 230.372 411.611 231.967C411.611 233.784 411.949 235.142 412.626 236.041C413.312 236.931 414.381 237.38 415.831 237.39C416.169 237.39 416.536 237.293 416.933 237.1C417.339 236.897 417.682 236.612 417.962 236.244C418.252 235.867 418.392 235.418 418.383 234.896H421.645C421.684 236.008 421.418 236.965 420.848 237.767C420.287 238.569 419.543 239.188 418.615 239.623C417.687 240.058 416.691 240.276 415.628 240.276ZM430.943 240.218C429.483 240.218 428.212 239.903 427.129 239.275C426.047 238.647 425.206 237.723 424.606 236.505C424.007 235.278 423.707 233.775 423.707 231.996C423.707 230.314 424.021 228.864 424.65 227.646C425.288 226.428 426.158 225.495 427.26 224.847C428.362 224.19 429.609 223.861 431.001 223.861C432.509 223.861 433.799 224.19 434.872 224.847C435.955 225.495 436.786 226.428 437.366 227.646C437.946 228.864 438.236 230.314 438.236 231.996C438.236 233.775 437.912 235.278 437.265 236.505C436.627 237.723 435.757 238.647 434.655 239.275C433.553 239.903 432.315 240.218 430.943 240.218ZM431.001 237.303C432.112 237.303 433.021 236.887 433.727 236.056C434.432 235.225 434.785 233.871 434.785 231.996C434.785 230.256 434.442 228.951 433.756 228.081C433.069 227.211 432.132 226.776 430.943 226.776C429.831 226.776 428.922 227.206 428.217 228.066C427.521 228.927 427.173 230.237 427.173 231.996C427.173 233.784 427.526 235.118 428.231 235.998C428.947 236.868 429.87 237.303 431.001 237.303ZM441.546 240V224.166H444.475L444.852 230.14L444.605 228.936C444.721 228.066 444.948 227.245 445.287 226.471C445.635 225.688 446.152 225.055 446.838 224.572C447.525 224.089 448.443 223.847 449.593 223.847C451.092 223.847 452.252 224.316 453.073 225.253C453.895 226.181 454.306 227.602 454.306 229.516V240H450.884V230.705C450.884 229.797 450.792 229.067 450.608 228.516C450.434 227.965 450.149 227.569 449.753 227.327C449.356 227.076 448.83 226.95 448.172 226.95C447.457 226.95 446.804 227.163 446.215 227.588C445.635 228.004 445.219 228.477 444.968 229.009V240H441.546ZM462.729 240.232C461.472 240.232 460.491 239.913 459.785 239.275C459.089 238.627 458.741 237.704 458.741 236.505V228.501C458.741 228.182 458.809 227.897 458.944 227.646C459.08 227.385 459.278 227.221 459.539 227.153L458.741 224.804V224.383L459.51 219.642H462.12V235.65C462.12 236.211 462.241 236.602 462.482 236.824C462.734 237.047 463.198 237.158 463.874 237.158C464.309 237.158 464.711 237.158 465.078 237.158C465.445 237.148 465.779 237.139 466.078 237.129V240.044C465.576 240.131 465.025 240.184 464.425 240.203C463.826 240.222 463.261 240.232 462.729 240.232ZM456.668 227.153V224.166H466.107V227.153H456.668ZM475.365 240.218C473.838 240.218 472.514 239.908 471.392 239.289C470.281 238.661 469.425 237.738 468.826 236.52C468.227 235.302 467.927 233.808 467.927 232.039C467.927 230.319 468.241 228.849 468.869 227.631C469.507 226.404 470.382 225.471 471.494 224.833C472.606 224.185 473.882 223.861 475.322 223.861C476.743 223.861 477.956 224.142 478.961 224.702C479.976 225.263 480.75 226.094 481.281 227.196C481.813 228.289 482.079 229.632 482.079 231.227C482.079 231.537 482.069 231.793 482.05 231.996C482.04 232.199 482.026 232.441 482.006 232.721H471.334C471.421 234.335 471.818 235.524 472.523 236.288C473.229 237.042 474.094 237.419 475.119 237.419C476.076 237.419 476.806 237.216 477.308 236.81C477.821 236.394 478.149 235.93 478.294 235.418H481.6C481.513 236.433 481.194 237.303 480.643 238.028C480.092 238.743 479.363 239.289 478.454 239.666C477.555 240.034 476.525 240.218 475.365 240.218ZM472.9 230.386H478.671C478.642 229.226 478.362 228.332 477.83 227.704C477.299 227.066 476.424 226.747 475.206 226.747C473.94 226.747 472.997 227.172 472.378 228.023C471.76 228.864 471.412 230.029 471.334 231.517C471.412 231.082 471.576 230.788 471.827 230.633C472.079 230.469 472.436 230.386 472.9 230.386ZM485.159 240V224.166H488.088L488.465 230.14L488.219 228.936C488.335 228.066 488.562 227.245 488.9 226.471C489.248 225.688 489.765 225.055 490.452 224.572C491.138 224.089 492.056 223.847 493.207 223.847C494.705 223.847 495.865 224.316 496.687 225.253C497.508 226.181 497.919 227.602 497.919 229.516V240H494.497V230.705C494.497 229.797 494.405 229.067 494.222 228.516C494.048 227.965 493.762 227.569 493.366 227.327C492.97 227.076 492.443 226.95 491.786 226.95C491.07 226.95 490.418 227.163 489.828 227.588C489.248 228.004 488.832 228.477 488.581 229.009V240H485.159ZM506.342 240.232C505.086 240.232 504.104 239.913 503.399 239.275C502.703 238.627 502.355 237.704 502.355 236.505V228.501C502.355 228.182 502.422 227.897 502.558 227.646C502.693 227.385 502.891 227.221 503.152 227.153L502.355 224.804V224.383L503.123 219.642H505.733V235.65C505.733 236.211 505.854 236.602 506.096 236.824C506.347 237.047 506.811 237.158 507.488 237.158C507.923 237.158 508.324 237.158 508.691 237.158C509.059 237.148 509.392 237.139 509.692 237.129V240.044C509.189 240.131 508.638 240.184 508.039 240.203C507.439 240.222 506.874 240.232 506.342 240.232ZM500.281 227.153V224.166H509.721V227.153H500.281Z"
        fill={palette[0]}
      />
      <path
        d="M368.018 455.232C366.761 455.232 365.78 454.913 365.075 454.275C364.379 453.627 364.031 452.704 364.031 451.505V443.501C364.031 443.182 364.098 442.897 364.234 442.646C364.369 442.385 364.567 442.221 364.828 442.153L364.031 439.804V439.383L364.799 434.642H367.409V450.65C367.409 451.211 367.53 451.602 367.772 451.824C368.023 452.047 368.487 452.158 369.164 452.158C369.599 452.158 370 452.158 370.367 452.158C370.734 452.148 371.068 452.139 371.368 452.129V455.044C370.865 455.131 370.314 455.184 369.715 455.203C369.115 455.222 368.55 455.232 368.018 455.232ZM361.957 442.153V439.166H371.397V442.153H361.957ZM374.589 455V439.166H377.518L377.895 445.27L377.59 444.429C377.658 443.791 377.784 443.144 377.967 442.486C378.161 441.829 378.431 441.225 378.779 440.674C379.137 440.123 379.591 439.683 380.142 439.355C380.703 439.016 381.384 438.847 382.187 438.847C382.38 438.847 382.573 438.857 382.767 438.876C382.96 438.895 383.139 438.929 383.303 438.977V442.631C382.975 442.525 382.622 442.457 382.245 442.428C381.877 442.39 381.539 442.37 381.23 442.37C380.853 442.37 380.447 442.448 380.012 442.602C379.577 442.747 379.176 442.97 378.808 443.269C378.441 443.569 378.175 443.941 378.011 444.386V455H374.589ZM385.861 455V439.166H389.326L389.283 455H385.861ZM387.615 436.831C386.987 436.831 386.455 436.614 386.02 436.179C385.585 435.734 385.368 435.169 385.368 434.482C385.368 433.806 385.585 433.255 386.02 432.829C386.455 432.404 386.987 432.191 387.615 432.191C388.224 432.191 388.746 432.404 389.181 432.829C389.626 433.255 389.848 433.806 389.848 434.482C389.848 435.169 389.626 435.734 389.181 436.179C388.746 436.614 388.224 436.831 387.615 436.831ZM399.857 461.467C398.571 461.467 397.411 461.254 396.377 460.829C395.352 460.413 394.56 459.775 393.999 458.915C393.438 458.055 393.221 456.977 393.347 455.682H396.653C396.643 456.233 396.711 456.726 396.856 457.161C397.001 457.605 397.305 457.958 397.769 458.219C398.233 458.48 398.939 458.611 399.886 458.611C400.708 458.611 401.336 458.495 401.771 458.263C402.216 458.031 402.515 457.678 402.67 457.204C402.825 456.73 402.902 456.117 402.902 455.363V451.07C402.815 451.525 402.627 452.003 402.337 452.506C402.047 453.009 401.597 453.434 400.988 453.782C400.379 454.12 399.557 454.289 398.523 454.289C397.585 454.289 396.749 454.082 396.015 453.666C395.28 453.25 394.656 452.69 394.144 451.984C393.632 451.278 393.24 450.486 392.97 449.606C392.709 448.717 392.578 447.798 392.578 446.851C392.578 445.092 392.868 443.622 393.448 442.443C394.038 441.264 394.797 440.374 395.725 439.775C396.653 439.176 397.634 438.876 398.668 438.876C399.586 438.876 400.326 439.002 400.887 439.253C401.457 439.504 401.902 439.809 402.221 440.166C402.54 440.524 402.772 440.877 402.917 441.225L402.931 439.18H406.281V455.334C406.281 456.764 406 457.929 405.44 458.828C404.889 459.727 404.13 460.384 403.163 460.8C402.196 461.225 401.094 461.448 399.857 461.467ZM399.698 451.549C400.423 451.549 401.007 451.452 401.452 451.259C401.897 451.056 402.235 450.819 402.467 450.548C402.699 450.268 402.844 450.026 402.902 449.823V443.197C402.805 442.965 402.627 442.738 402.366 442.515C402.105 442.293 401.761 442.109 401.336 441.964C400.911 441.819 400.389 441.747 399.77 441.747C398.697 441.747 397.817 442.143 397.131 442.936C396.445 443.729 396.102 444.971 396.102 446.662C396.102 448.199 396.44 449.398 397.117 450.258C397.803 451.119 398.663 451.549 399.698 451.549ZM416.849 461.467C415.564 461.467 414.404 461.254 413.369 460.829C412.345 460.413 411.552 459.775 410.991 458.915C410.431 458.055 410.213 456.977 410.339 455.682H413.645C413.635 456.233 413.703 456.726 413.848 457.161C413.993 457.605 414.297 457.958 414.761 458.219C415.225 458.48 415.931 458.611 416.878 458.611C417.7 458.611 418.328 458.495 418.763 458.263C419.208 458.031 419.508 457.678 419.662 457.204C419.817 456.73 419.894 456.117 419.894 455.363V451.07C419.807 451.525 419.619 452.003 419.329 452.506C419.039 453.009 418.589 453.434 417.98 453.782C417.371 454.12 416.55 454.289 415.515 454.289C414.578 454.289 413.741 454.082 413.007 453.666C412.272 453.25 411.649 452.69 411.136 451.984C410.624 451.278 410.232 450.486 409.962 449.606C409.701 448.717 409.57 447.798 409.57 446.851C409.57 445.092 409.86 443.622 410.44 442.443C411.03 441.264 411.789 440.374 412.717 439.775C413.645 439.176 414.626 438.876 415.66 438.876C416.579 438.876 417.318 439.002 417.879 439.253C418.449 439.504 418.894 439.809 419.213 440.166C419.532 440.524 419.764 440.877 419.909 441.225L419.923 439.18H423.273V455.334C423.273 456.764 422.992 457.929 422.432 458.828C421.881 459.727 421.122 460.384 420.155 460.8C419.189 461.225 418.087 461.448 416.849 461.467ZM416.69 451.549C417.415 451.549 418 451.452 418.444 451.259C418.889 451.056 419.227 450.819 419.459 450.548C419.691 450.268 419.836 450.026 419.894 449.823V443.197C419.798 442.965 419.619 442.738 419.358 442.515C419.097 442.293 418.754 442.109 418.328 441.964C417.903 441.819 417.381 441.747 416.762 441.747C415.689 441.747 414.81 442.143 414.123 442.936C413.437 443.729 413.094 444.971 413.094 446.662C413.094 448.199 413.432 449.398 414.109 450.258C414.795 451.119 415.655 451.549 416.69 451.549ZM433.897 455.218C432.369 455.218 431.045 454.908 429.924 454.289C428.812 453.661 427.957 452.738 427.357 451.52C426.758 450.302 426.458 448.808 426.458 447.039C426.458 445.319 426.772 443.849 427.401 442.631C428.039 441.404 428.914 440.471 430.025 439.833C431.137 439.185 432.413 438.861 433.853 438.861C435.274 438.861 436.487 439.142 437.493 439.702C438.508 440.263 439.281 441.094 439.813 442.196C440.344 443.289 440.61 444.632 440.61 446.227C440.61 446.537 440.601 446.793 440.581 446.996C440.572 447.199 440.557 447.441 440.538 447.721H429.866C429.953 449.335 430.349 450.524 431.055 451.288C431.76 452.042 432.626 452.419 433.65 452.419C434.607 452.419 435.337 452.216 435.84 451.81C436.352 451.394 436.681 450.93 436.826 450.418H440.132C440.045 451.433 439.726 452.303 439.175 453.028C438.624 453.743 437.894 454.289 436.985 454.666C436.086 455.034 435.057 455.218 433.897 455.218ZM431.432 445.386H437.203C437.174 444.226 436.893 443.332 436.362 442.704C435.83 442.066 434.955 441.747 433.737 441.747C432.471 441.747 431.528 442.172 430.91 443.023C430.291 443.864 429.943 445.029 429.866 446.517C429.943 446.082 430.107 445.788 430.359 445.633C430.61 445.469 430.968 445.386 431.432 445.386ZM443.69 455V439.166H446.619L446.996 445.27L446.692 444.429C446.759 443.791 446.885 443.144 447.069 442.486C447.262 441.829 447.533 441.225 447.881 440.674C448.238 440.123 448.693 439.683 449.244 439.355C449.804 439.016 450.486 438.847 451.288 438.847C451.482 438.847 451.675 438.857 451.868 438.876C452.062 438.895 452.24 438.929 452.405 438.977V442.631C452.076 442.525 451.723 442.457 451.346 442.428C450.979 442.39 450.641 442.37 450.331 442.37C449.954 442.37 449.548 442.448 449.113 442.602C448.678 442.747 448.277 442.97 447.91 443.269C447.542 443.569 447.277 443.941 447.112 444.386V455H443.69Z"
        fill={palette[0]}
      />
      <path
        d="M923.105 415.174C922.138 415.174 921.282 414.995 920.538 414.637C919.794 414.27 919.209 413.763 918.784 413.115C918.368 412.467 918.16 411.718 918.16 410.867C918.16 409.93 918.329 409.156 918.668 408.547C919.006 407.938 919.494 407.455 920.132 407.097C920.78 406.73 921.539 406.45 922.409 406.256C923.027 406.121 923.68 406.01 924.366 405.923C925.062 405.836 925.705 405.768 926.295 405.72C926.884 405.662 927.339 405.623 927.658 405.604V404.966C927.658 403.893 927.44 403.091 927.005 402.559C926.58 402.018 925.855 401.747 924.83 401.747C924.173 401.747 923.622 401.829 923.177 401.993C922.732 402.148 922.394 402.448 922.162 402.892C921.94 403.327 921.819 403.965 921.8 404.806H918.682C918.576 403.443 918.769 402.327 919.262 401.457C919.765 400.577 920.509 399.93 921.495 399.514C922.491 399.089 923.665 398.876 925.019 398.876C925.821 398.876 926.575 398.968 927.281 399.151C927.996 399.325 928.629 399.63 929.18 400.065C929.731 400.49 930.166 401.075 930.485 401.819C930.804 402.564 930.964 403.506 930.964 404.647V415H927.614L927.658 411.447C927.474 412.52 927.01 413.41 926.266 414.115C925.521 414.821 924.468 415.174 923.105 415.174ZM924.018 412.593C924.521 412.593 925.028 412.506 925.541 412.332C926.063 412.158 926.517 411.907 926.904 411.578C927.3 411.249 927.551 410.863 927.658 410.418V407.518C927.271 407.557 926.812 407.624 926.28 407.721C925.758 407.818 925.309 407.905 924.932 407.982C923.849 408.204 923.066 408.499 922.583 408.866C922.109 409.224 921.872 409.775 921.872 410.519C921.872 410.945 921.969 411.317 922.162 411.636C922.365 411.945 922.631 412.182 922.96 412.346C923.288 412.511 923.641 412.593 924.018 412.593ZM935.177 415V399.166H938.106L938.483 405.27L938.178 404.429C938.246 403.791 938.371 403.144 938.555 402.486C938.748 401.829 939.019 401.225 939.367 400.674C939.725 400.123 940.179 399.683 940.73 399.355C941.291 399.016 941.972 398.847 942.775 398.847C942.968 398.847 943.161 398.857 943.355 398.876C943.548 398.895 943.727 398.929 943.891 398.977V402.631C943.562 402.525 943.21 402.457 942.833 402.428C942.465 402.39 942.127 402.37 941.818 402.37C941.441 402.37 941.035 402.448 940.6 402.602C940.165 402.747 939.763 402.97 939.396 403.269C939.029 403.569 938.763 403.941 938.599 404.386V415H935.177ZM946.42 415V399.166H949.349L949.726 405.27L949.421 404.429C949.489 403.791 949.615 403.144 949.798 402.486C949.992 401.829 950.262 401.225 950.61 400.674C950.968 400.123 951.422 399.683 951.973 399.355C952.534 399.016 953.215 398.847 954.018 398.847C954.211 398.847 954.404 398.857 954.598 398.876C954.791 398.895 954.97 398.929 955.134 398.977V402.631C954.806 402.525 954.453 402.457 954.076 402.428C953.708 402.39 953.37 402.37 953.061 402.37C952.684 402.37 952.278 402.448 951.843 402.602C951.408 402.747 951.007 402.97 950.639 403.269C950.272 403.569 950.006 403.941 949.842 404.386V415H946.42ZM963.656 415.218C962.196 415.218 960.925 414.903 959.842 414.275C958.759 413.647 957.918 412.723 957.319 411.505C956.72 410.278 956.42 408.775 956.42 406.996C956.42 405.314 956.734 403.864 957.363 402.646C958.001 401.428 958.871 400.495 959.973 399.847C961.075 399.19 962.322 398.861 963.714 398.861C965.222 398.861 966.512 399.19 967.585 399.847C968.668 400.495 969.499 401.428 970.079 402.646C970.659 403.864 970.949 405.314 970.949 406.996C970.949 408.775 970.625 410.278 969.978 411.505C969.34 412.723 968.47 413.647 967.368 414.275C966.266 414.903 965.028 415.218 963.656 415.218ZM963.714 412.303C964.825 412.303 965.734 411.887 966.44 411.056C967.145 410.225 967.498 408.871 967.498 406.996C967.498 405.256 967.155 403.951 966.469 403.081C965.782 402.211 964.845 401.776 963.656 401.776C962.544 401.776 961.635 402.206 960.93 403.066C960.234 403.927 959.886 405.237 959.886 406.996C959.886 408.784 960.238 410.118 960.944 410.998C961.659 411.868 962.583 412.303 963.714 412.303ZM977.146 415L972.346 399.18H976.102L978.074 407.039L979.045 412.085L979.219 412.1L980.002 407.025L981.902 399.18H986.208L988.079 407.054L988.847 412.259L989.065 412.245L990.051 407.054L992.023 399.18H995.764L990.979 415H986.977L985.077 407.46L984.193 402.878H983.946L983.018 407.474L981.133 415H977.146Z"
        fill={palette[0]}
      />
      <path d="M431 254.5V314H551.5" stroke={palette[1]} strokeWidth={4} />
      <path d="M726.5 393.5L784 336L669 336L726.5 393.5Z" fill={palette[4]} />
      <rect x={629} y={407} width={178} height={74} fill={palette[6]} />
      <path
        d="M683.458 458L674.585 429.647H678.719L682.561 443.004L685.759 454.548H685.993L689.191 443.004L693.052 429.647H697.186L688.352 458H683.458ZM701.295 458V436.842H704.961L704.903 458H701.295ZM703.148 433.43C702.433 433.43 701.822 433.183 701.315 432.689C700.821 432.195 700.574 431.558 700.574 430.778C700.574 430.011 700.821 429.38 701.315 428.886C701.822 428.392 702.433 428.145 703.148 428.145C703.85 428.145 704.448 428.392 704.942 428.886C705.449 429.38 705.702 430.011 705.702 430.778C705.702 431.558 705.449 432.195 704.942 432.689C704.435 433.183 703.837 433.43 703.148 433.43ZM719.606 458.293C717.669 458.293 715.966 457.87 714.497 457.025C713.041 456.18 711.91 454.938 711.104 453.3C710.298 451.649 709.895 449.634 709.895 447.256C709.895 444.967 710.311 443.004 711.143 441.366C711.975 439.728 713.119 438.474 714.575 437.603C716.031 436.732 717.688 436.296 719.547 436.296C721.393 436.296 722.973 436.693 724.286 437.486C725.612 438.279 726.632 439.416 727.347 440.898C728.062 442.367 728.413 444.129 728.4 446.183C728.4 446.599 728.387 446.943 728.361 447.216C728.335 447.489 728.316 447.775 728.303 448.074H713.522C713.613 450.414 714.198 452.189 715.277 453.398C716.369 454.594 717.76 455.192 719.45 455.192C720.88 455.192 721.985 454.893 722.765 454.295C723.558 453.684 724.058 452.904 724.266 451.955H727.815C727.724 453.307 727.308 454.457 726.567 455.406C725.839 456.355 724.877 457.077 723.681 457.571C722.485 458.052 721.127 458.293 719.606 458.293ZM715.452 445.344H724.754C724.728 443.524 724.279 442.094 723.408 441.054C722.537 440.014 721.205 439.494 719.411 439.494C717.526 439.494 716.096 440.138 715.121 441.425C714.146 442.699 713.613 444.46 713.522 446.709C713.626 446.176 713.834 445.819 714.146 445.637C714.471 445.442 714.906 445.344 715.452 445.344ZM736.874 458L730.244 436.725H734.3L737.069 446.983L738.883 454.841H739.078L740.54 447.06L743.153 436.725H747.736L750.29 447.08L751.772 454.997L751.967 454.977L753.82 447.002L756.589 436.725H760.625L754.015 458H749.725L746.956 447.392L745.571 440.762H745.337L743.914 447.411L741.164 458H736.874Z"
        fill={palette[0]}
      />
      <rect x={629} y={407} width={178} height={74} stroke={palette[8]} strokeWidth={4} />
      <path d="M467 444H635" stroke={palette[1]} strokeWidth={4} />
      <path d="M906 407.25H864.5V381H740" stroke={palette[1]} strokeWidth={4} />
    </svg>
  )
})