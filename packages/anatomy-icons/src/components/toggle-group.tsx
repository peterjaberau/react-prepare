import { createComponent } from "../create-component"

export const ToggleGroupAnatomy = createComponent((props) => {
  const { palette, ...rest } = props
  return (
    <svg width={1456} height={812} viewBox="0 0 1456 812" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <rect width={174} height={174} transform="translate(467 319)" fill={palette[4]} />
      <path
        d="M527 379H581V385H527V379ZM539 415H569V421H539V415ZM539 391H569V397H539V391ZM527 403H581V409H527V403ZM527 427H581V433H527V427Z"
        fill={palette[0]}
      />
      <rect width={174} height={174} transform="translate(645 319)" fill={palette[5]} />
      <path
        d="M705 427H759V433H705V427ZM705 391H741V397H705V391ZM705 379H759V385H705V379ZM705 415H741V421H705V415ZM705 403H759V409H705V403Z"
        fill={palette[0]}
      />
      <rect width={174} height={174} transform="translate(823 319)" fill={palette[5]} />
      <path
        d="M883 379H937V385H883V379ZM883 427H937V433H883V427ZM883 403H937V409H883V403ZM901 415H937V421H901V415ZM901 391H937V397H901V391Z"
        fill={palette[0]}
      />
      <rect
        x={444.36}
        y={287.36}
        width={579.28}
        height={233.28}
        stroke={palette[9]}
        strokeWidth={2.71984}
        strokeDasharray="10.88 10.88"
      />
      <path
        d="M727.204 160V144.166H730.133L730.51 150.27L730.206 149.429C730.273 148.791 730.399 148.144 730.583 147.486C730.776 146.829 731.047 146.225 731.395 145.674C731.752 145.123 732.207 144.683 732.758 144.355C733.318 144.016 734 143.847 734.802 143.847C734.995 143.847 735.189 143.857 735.382 143.876C735.575 143.895 735.754 143.929 735.919 143.977V147.631C735.59 147.525 735.237 147.457 734.86 147.428C734.493 147.39 734.154 147.37 733.845 147.37C733.468 147.37 733.062 147.448 732.627 147.602C732.192 147.747 731.791 147.97 731.424 148.269C731.056 148.569 730.79 148.941 730.626 149.386V160H727.204ZM744.44 160.218C742.98 160.218 741.709 159.903 740.626 159.275C739.544 158.647 738.703 157.723 738.103 156.505C737.504 155.278 737.204 153.775 737.204 151.996C737.204 150.314 737.518 148.864 738.147 147.646C738.785 146.428 739.655 145.495 740.757 144.847C741.859 144.19 743.106 143.861 744.498 143.861C746.006 143.861 747.296 144.19 748.369 144.847C749.452 145.495 750.283 146.428 750.863 147.646C751.443 148.864 751.733 150.314 751.733 151.996C751.733 153.775 751.409 155.278 750.762 156.505C750.124 157.723 749.254 158.647 748.152 159.275C747.05 159.903 745.812 160.218 744.44 160.218ZM744.498 157.303C745.609 157.303 746.518 156.887 747.224 156.056C747.929 155.225 748.282 153.871 748.282 151.996C748.282 150.256 747.939 148.951 747.253 148.081C746.566 147.211 745.629 146.776 744.44 146.776C743.328 146.776 742.419 147.206 741.714 148.066C741.018 148.927 740.67 150.237 740.67 151.996C740.67 153.784 741.023 155.118 741.728 155.998C742.444 156.868 743.367 157.303 744.498 157.303ZM761.234 160.218C759.774 160.218 758.503 159.903 757.42 159.275C756.338 158.647 755.497 157.723 754.897 156.505C754.298 155.278 753.998 153.775 753.998 151.996C753.998 150.314 754.312 148.864 754.941 147.646C755.579 146.428 756.449 145.495 757.551 144.847C758.653 144.19 759.9 143.861 761.292 143.861C762.8 143.861 764.09 144.19 765.163 144.847C766.246 145.495 767.077 146.428 767.657 147.646C768.237 148.864 768.527 150.314 768.527 151.996C768.527 153.775 768.203 155.278 767.556 156.505C766.918 157.723 766.048 158.647 764.946 159.275C763.844 159.903 762.606 160.218 761.234 160.218ZM761.292 157.303C762.403 157.303 763.312 156.887 764.018 156.056C764.723 155.225 765.076 153.871 765.076 151.996C765.076 150.256 764.733 148.951 764.047 148.081C763.36 147.211 762.423 146.776 761.234 146.776C760.122 146.776 759.213 147.206 758.508 148.066C757.812 148.927 757.464 150.237 757.464 151.996C757.464 153.784 757.817 155.118 758.522 155.998C759.238 156.868 760.161 157.303 761.292 157.303ZM776.453 160.232C775.196 160.232 774.215 159.913 773.509 159.275C772.813 158.627 772.465 157.704 772.465 156.505V148.501C772.465 148.182 772.533 147.897 772.668 147.646C772.803 147.385 773.002 147.221 773.263 147.153L772.465 144.804V144.383L773.234 139.642H775.844V155.65C775.844 156.211 775.964 156.602 776.206 156.824C776.457 157.047 776.921 157.158 777.598 157.158C778.033 157.158 778.434 157.158 778.802 157.158C779.169 157.148 779.502 157.139 779.802 157.129V160.044C779.299 160.131 778.748 160.184 778.149 160.203C777.55 160.222 776.984 160.232 776.453 160.232ZM770.392 147.153V144.166H779.831V147.153H770.392Z"
        fill={palette[0]}
      />
      <path d="M758 174L758 286" stroke={palette[1]} strokeWidth={4} />
      <path
        d="M425.429 652V636.18H428.895L428.851 652H425.429ZM427.184 633.831C426.555 633.831 426.024 633.614 425.589 633.179C425.154 632.734 424.936 632.169 424.936 631.482C424.936 630.806 425.154 630.255 425.589 629.829C426.024 629.404 426.555 629.191 427.184 629.191C427.793 629.191 428.315 629.404 428.75 629.829C429.194 630.255 429.417 630.806 429.417 631.482C429.417 632.169 429.194 632.734 428.75 633.179C428.315 633.614 427.793 633.831 427.184 633.831ZM437.719 652.232C436.463 652.232 435.481 651.913 434.776 651.275C434.08 650.627 433.732 649.704 433.732 648.505V640.501C433.732 640.182 433.799 639.897 433.935 639.646C434.07 639.385 434.268 639.221 434.529 639.153L433.732 636.804V636.383L434.5 631.642H437.11V647.65C437.11 648.211 437.231 648.602 437.473 648.824C437.724 649.047 438.188 649.158 438.865 649.158C439.3 649.158 439.701 649.158 440.068 649.158C440.436 649.148 440.769 649.139 441.069 649.129V652.044C440.566 652.131 440.015 652.184 439.416 652.203C438.816 652.222 438.251 652.232 437.719 652.232ZM431.658 639.153V636.18H441.098V639.153H431.658ZM450.356 652.218C448.828 652.218 447.504 651.908 446.383 651.289C445.271 650.661 444.416 649.738 443.816 648.52C443.217 647.302 442.917 645.808 442.917 644.039C442.917 642.319 443.231 640.849 443.86 639.631C444.498 638.404 445.373 637.471 446.484 636.833C447.596 636.185 448.872 635.861 450.312 635.861C451.733 635.861 452.946 636.142 453.952 636.702C454.967 637.263 455.74 638.094 456.272 639.196C456.803 640.289 457.069 641.632 457.069 643.227C457.069 643.537 457.06 643.793 457.04 643.996C457.031 644.199 457.016 644.441 456.997 644.721H446.325C446.412 646.335 446.808 647.524 447.514 648.288C448.219 649.042 449.085 649.419 450.109 649.419C451.066 649.419 451.796 649.216 452.299 648.81C452.811 648.394 453.14 647.93 453.285 647.418H456.591C456.504 648.433 456.185 649.303 455.634 650.028C455.083 650.743 454.353 651.289 453.444 651.666C452.545 652.034 451.516 652.218 450.356 652.218ZM447.891 642.386H453.662C453.633 641.226 453.352 640.332 452.821 639.704C452.289 639.066 451.414 638.747 450.196 638.747C448.93 638.747 447.987 639.172 447.369 640.023C446.75 640.864 446.402 642.029 446.325 643.517C446.402 643.082 446.566 642.788 446.818 642.633C447.069 642.469 447.427 642.386 447.891 642.386ZM460.149 652V636.18H463.093L463.47 642.14L463.223 640.936C463.339 640.066 463.566 639.245 463.905 638.471C464.243 637.688 464.755 637.055 465.442 636.572C466.128 636.089 467.042 635.847 468.182 635.847C469.449 635.847 470.468 636.209 471.242 636.934C472.025 637.65 472.508 638.752 472.692 640.24L472.764 640.472V652H469.328V642.705C469.328 641.797 469.241 641.067 469.067 640.516C468.893 639.965 468.617 639.569 468.24 639.327C467.873 639.076 467.385 638.95 466.776 638.95C466.06 638.95 465.413 639.163 464.833 639.588C464.253 640.004 463.837 640.477 463.586 641.009V652H460.149ZM478.506 652V642.705C478.506 641.797 478.419 641.067 478.245 640.516C478.071 639.965 477.796 639.569 477.419 639.327C477.051 639.076 476.563 638.95 475.954 638.95C475.239 638.95 474.591 639.163 474.011 639.588C473.431 640.004 473.016 640.477 472.764 641.009L472.735 642.14L472.503 641.197C472.6 640.337 472.808 639.501 473.127 638.689C473.455 637.867 473.958 637.191 474.635 636.659C475.311 636.118 476.22 635.847 477.361 635.847C478.791 635.847 479.913 636.316 480.725 637.253C481.537 638.181 481.943 639.602 481.943 641.516V652H478.506Z"
        fill={palette[0]}
      />
      <path d="M565 489L565 642L506 642" stroke={palette[1]} strokeWidth={4} />
    </svg>
  )
})