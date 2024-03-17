const width = 215;
const height = 18;
const ratio = width / height;

const Logo = ({
  width = 215,
}) => (
    <svg
      width={width}
      height={width / ratio}
      viewBox="0 0 215 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.61146 17.9354C7.64812 17.9354 5.93465 17.5479 4.47107 16.7729C3.02534 15.9979 1.91872 14.9462 1.15123 13.6176C0.383745 12.2706 0 10.776 0 9.13378C0 7.36238 0.43729 5.78473 1.31187 4.40082C2.2043 2.99846 3.418 1.91902 4.95298 1.16248C6.50581 0.387494 8.24605 0 10.1737 0C11.0126 0 11.8515 0.0738084 12.6903 0.221425C13.5292 0.369042 14.2075 0.572015 14.7251 0.830344C14.8679 0.904151 14.9571 0.977959 14.9928 1.05177C15.0464 1.12558 15.0821 1.26397 15.0999 1.46694L15.4212 5.06509C15.4212 5.12045 15.3766 5.15735 15.2873 5.17581C15.1981 5.19426 15.1356 5.16658 15.0999 5.09277C14.5644 3.70887 13.7613 2.62942 12.6903 1.85443C11.6194 1.07945 10.3611 0.691954 8.91537 0.691954C6.95202 0.691954 5.44382 1.35623 4.39075 2.68478C3.33769 3.99487 2.81115 5.80318 2.81115 8.10969C2.81115 9.91799 3.13243 11.5325 3.77498 12.9534C4.41752 14.3742 5.30103 15.4813 6.42549 16.2747C7.5678 17.0682 8.84397 17.4649 10.254 17.4649C11.0394 17.4649 11.6462 17.3819 12.0746 17.2158C12.5029 17.0497 12.8153 16.7268 13.0116 16.2471C13.2258 15.7673 13.3329 15.0569 13.3329 14.1158C13.3329 13.1563 13.2793 12.4921 13.1723 12.123C13.0652 11.7355 12.8242 11.4772 12.4494 11.348C12.0924 11.2189 11.4588 11.1543 10.5485 11.1543C10.4414 11.1543 10.3879 11.0805 10.3879 10.9329C10.3879 10.8775 10.3968 10.8314 10.4146 10.7945C10.4503 10.7391 10.486 10.7114 10.5217 10.7114C12.0032 10.8037 13.1901 10.8498 14.0825 10.8498C14.975 10.8498 15.9031 10.8221 16.8669 10.7668C16.9026 10.7668 16.9294 10.7945 16.9472 10.8498C16.9829 10.8867 17.0008 10.9236 17.0008 10.9605C17.0008 11.0897 16.9562 11.1543 16.8669 11.1543C16.5099 11.1358 16.2601 11.2004 16.1173 11.348C15.9745 11.4772 15.8763 11.754 15.8228 12.1784C15.7871 12.6028 15.7692 13.3409 15.7692 14.3926C15.7692 15.223 15.796 15.8134 15.8495 16.164C15.9209 16.5146 15.9566 16.736 15.9566 16.8283C15.9566 16.939 15.9299 17.0128 15.8763 17.0497C15.8406 17.0682 15.7603 17.1051 15.6354 17.1604C13.3864 17.6771 11.3785 17.9354 9.61146 17.9354Z"
        fill="#4D1199"
      />
      <path
        d="M33.3268 17.2711C33.3982 17.2711 33.4339 17.3265 33.4339 17.4372C33.4339 17.5479 33.3982 17.6033 33.3268 17.6033C32.9698 17.6033 32.4165 17.5848 31.6669 17.5479C30.9172 17.511 30.3818 17.4926 30.0605 17.4926C29.7749 17.4926 29.3287 17.511 28.7219 17.5479C28.1507 17.5848 27.7491 17.6033 27.5171 17.6033C27.4457 17.6033 27.41 17.5479 27.41 17.4372C27.41 17.3265 27.4457 17.2711 27.5171 17.2711C27.9454 17.2711 28.2489 17.2158 28.4274 17.1051C28.6237 16.9944 28.7219 16.8191 28.7219 16.5792C28.7219 16.3209 28.588 15.8872 28.3203 15.2783L26.6336 11.5418H23.3137L22.2428 14.1989C21.9394 14.9739 21.7877 15.5643 21.7877 15.9703C21.7877 16.4316 21.9394 16.7637 22.2428 16.9667C22.5641 17.1697 23.046 17.2711 23.6886 17.2711C23.7778 17.2711 23.8224 17.3265 23.8224 17.4372C23.8224 17.5479 23.7778 17.6033 23.6886 17.6033C23.4387 17.6033 23.0817 17.5848 22.6176 17.5479C22.1179 17.511 21.6538 17.4926 21.2255 17.4926C20.7792 17.4926 20.2527 17.511 19.6459 17.5479C19.1104 17.5848 18.6731 17.6033 18.334 17.6033C18.2447 17.6033 18.2001 17.5479 18.2001 17.4372C18.2001 17.3265 18.2447 17.2711 18.334 17.2711C18.8873 17.2711 19.3335 17.1881 19.6726 17.022C20.0117 16.856 20.3241 16.5515 20.6097 16.1087C20.8953 15.6474 21.2344 14.9277 21.627 13.9498L25.5894 4.23475C25.6251 4.16094 25.6787 4.12404 25.7501 4.12404C25.8215 4.12404 25.8661 4.16094 25.8839 4.23475L30.1944 13.8114C30.6406 14.8078 31.0065 15.5459 31.2921 16.0256C31.5955 16.5054 31.89 16.8375 32.1756 17.022C32.479 17.1881 32.8627 17.2711 33.3268 17.2711ZM23.5547 10.9052H26.3391L24.8666 7.63916L23.5547 10.9052Z"
        fill="#4D1199"
      />
      <path
        d="M42.3932 10.4346C43.7497 10.5085 44.7849 10.8221 45.4988 11.3757C46.2306 11.9108 46.5965 12.6766 46.5965 13.673C46.5965 14.4664 46.3734 15.1676 45.9272 15.7765C45.4988 16.3854 44.892 16.8652 44.1066 17.2158C43.3213 17.5479 42.4289 17.714 41.4294 17.714C40.9474 17.714 40.3852 17.6863 39.7427 17.631C39.4928 17.6125 39.1894 17.5941 38.8324 17.5756C38.4754 17.5571 38.0827 17.5479 37.6544 17.5479L36.0212 17.5756C35.7 17.5941 35.2627 17.6033 34.7094 17.6033C34.6737 17.6033 34.6558 17.5479 34.6558 17.4372C34.6558 17.3265 34.6737 17.2711 34.7094 17.2711C35.2627 17.2711 35.6643 17.225 35.9141 17.1328C36.164 17.0405 36.3336 16.8652 36.4228 16.6069C36.5121 16.3301 36.5567 15.9149 36.5567 15.3614V6.89185C36.5567 6.33829 36.5121 5.93234 36.4228 5.67401C36.3336 5.41568 36.164 5.24039 35.9141 5.14813C35.6643 5.03742 35.2716 4.98206 34.7361 4.98206C34.7004 4.98206 34.6826 4.9267 34.6826 4.81599C34.6826 4.70528 34.7004 4.64992 34.7361 4.64992L36.0212 4.6776C36.7352 4.71451 37.2796 4.73296 37.6544 4.73296C38.172 4.73296 38.7164 4.70528 39.2875 4.64992C39.4839 4.63147 39.7605 4.61302 40.1175 4.59457C40.4923 4.57611 40.8136 4.56689 41.0813 4.56689C42.3843 4.56689 43.4016 4.80677 44.1334 5.28652C44.8831 5.74782 45.2579 6.4121 45.2579 7.27934C45.2579 7.98052 45.008 8.60789 44.5082 9.16146C44.0085 9.69657 43.3035 10.121 42.3932 10.4346ZM40.412 4.9267C39.9836 4.9267 39.6623 4.98206 39.4482 5.09277C39.234 5.18503 39.0823 5.37878 38.993 5.67401C38.9038 5.95079 38.8592 6.37519 38.8592 6.94721V10.407C39.1626 10.4254 39.5731 10.4346 40.0907 10.4346C40.769 10.4346 41.3044 10.3701 41.6971 10.2409C42.0898 10.1117 42.3843 9.87186 42.5806 9.52127C42.7948 9.15223 42.9019 8.61712 42.9019 7.91594C42.9019 5.92312 42.0719 4.9267 40.412 4.9267ZM40.9474 17.2711C43.0714 17.2711 44.1334 16.2932 44.1334 14.3373C44.1334 12.0677 42.7234 10.9329 39.9033 10.9329C39.4392 10.9329 39.0912 10.9421 38.8592 10.9605V15.3614C38.8592 16.0625 39.0019 16.5607 39.2875 16.856C39.5731 17.1327 40.1264 17.2711 40.9474 17.2711Z"
        fill="#4D1199"
      />
      <path
        d="M63.1321 17.2711C63.1857 17.2711 63.2124 17.3265 63.2124 17.4372C63.2124 17.5479 63.1857 17.6033 63.1321 17.6033H59.1697C58.8842 17.6033 58.3665 17.0497 57.6169 15.9426C56.8851 14.817 56.0284 13.2947 55.0467 11.3757C54.6719 11.4311 54.2881 11.4587 53.8955 11.4587C53.6099 11.4587 53.3957 11.4495 53.2529 11.4311V15.3614C53.2529 15.9149 53.2886 16.3301 53.36 16.6069C53.4493 16.8652 53.6099 17.0405 53.8419 17.1328C54.0918 17.225 54.4845 17.2711 55.0199 17.2711C55.0556 17.2711 55.0735 17.3265 55.0735 17.4372C55.0735 17.5479 55.0556 17.6033 55.0199 17.6033C54.5023 17.6033 54.0918 17.5941 53.7884 17.5756L52.0214 17.5479L50.3615 17.5756C50.0402 17.5941 49.6029 17.6033 49.0496 17.6033C49.0139 17.6033 48.996 17.5479 48.996 17.4372C48.996 17.3265 49.0139 17.2711 49.0496 17.2711C49.585 17.2711 49.9777 17.225 50.2276 17.1328C50.4775 17.0405 50.647 16.8652 50.7363 16.6069C50.8255 16.3301 50.8701 15.9149 50.8701 15.3614V6.89185C50.8701 6.33829 50.8255 5.93234 50.7363 5.67401C50.647 5.41568 50.4775 5.24039 50.2276 5.14813C49.9777 5.03742 49.594 4.98206 49.0764 4.98206C49.0407 4.98206 49.0228 4.9267 49.0228 4.81599C49.0228 4.70528 49.0407 4.64992 49.0764 4.64992L50.3882 4.6776C51.0665 4.71451 51.6109 4.73296 52.0214 4.73296C52.3605 4.73296 52.6729 4.72373 52.9584 4.70528C53.244 4.68683 53.4939 4.66838 53.7081 4.64992C54.2971 4.59457 54.8325 4.56689 55.3144 4.56689C56.6352 4.56689 57.6348 4.79754 58.313 5.25884C59.0091 5.72014 59.3571 6.38442 59.3571 7.25167C59.3571 7.9713 59.143 8.6448 58.7146 9.27217C58.2862 9.89954 57.6972 10.3977 56.9476 10.7668C57.9114 12.4459 58.7414 13.756 59.4375 14.6971C60.1336 15.6197 60.7672 16.284 61.3383 16.6899C61.9095 17.0774 62.5074 17.2711 63.1321 17.2711ZM53.2529 10.9329C53.4136 10.9513 53.6902 10.9605 54.0829 10.9605C55.136 10.9605 55.8677 10.7114 56.2783 10.2132C56.6888 9.71502 56.894 8.97693 56.894 7.99897C56.894 6.04306 56.1533 5.06509 54.6719 5.06509C54.0829 5.06509 53.6991 5.19426 53.5207 5.45259C53.3422 5.69247 53.2529 6.19067 53.2529 6.94721V10.9329Z"
        fill="#4D1199"
      />
      <path
        d="M68.4329 15.3614C68.4329 15.9149 68.4776 16.3301 68.5668 16.6069C68.656 16.8652 68.8256 17.0405 69.0755 17.1328C69.3254 17.225 69.718 17.2711 70.2535 17.2711C70.2892 17.2711 70.307 17.3265 70.307 17.4372C70.307 17.5479 70.2892 17.6033 70.2535 17.6033C69.718 17.6033 69.2986 17.5941 68.9952 17.5756L67.2282 17.5479L65.5682 17.5756C65.247 17.5941 64.8097 17.6033 64.2564 17.6033C64.2207 17.6033 64.2028 17.5479 64.2028 17.4372C64.2028 17.3265 64.2207 17.2711 64.2564 17.2711C64.8097 17.2711 65.2113 17.225 65.4612 17.1328C65.711 17.0405 65.8806 16.8652 65.9698 16.6069C66.0591 16.3301 66.1037 15.9149 66.1037 15.3614V6.89185C66.1037 6.33829 66.0591 5.93234 65.9698 5.67401C65.8806 5.41568 65.7021 5.24039 65.4344 5.14813C65.1845 5.03742 64.7918 4.98206 64.2564 4.98206C64.2207 4.98206 64.2028 4.9267 64.2028 4.81599C64.2028 4.70528 64.2207 4.64992 64.2564 4.64992L65.5682 4.6776C66.2465 4.71451 66.7998 4.73296 67.2282 4.73296C67.7101 4.73296 68.308 4.71451 69.0219 4.6776L70.2535 4.64992C70.2892 4.64992 70.307 4.70528 70.307 4.81599C70.307 4.9267 70.2892 4.98206 70.2535 4.98206C69.7359 4.98206 69.3432 5.03742 69.0755 5.14813C68.8256 5.25884 68.656 5.45259 68.5668 5.72937C68.4776 5.9877 68.4329 6.39364 68.4329 6.94721V15.3614Z"
        fill="#4D1199"
      />
      <path
        d="M82.9118 13.9221C82.9297 13.8667 82.9832 13.8391 83.0725 13.8391C83.1617 13.8391 83.2063 13.8667 83.2063 13.9221C83.0814 15.2506 83.0189 16.3393 83.0189 17.1881C83.0189 17.3357 82.9922 17.4464 82.9386 17.5202C82.8851 17.5756 82.778 17.6033 82.6173 17.6033H72.6578C72.6221 17.6033 72.6043 17.5479 72.6043 17.4372C72.6043 17.3265 72.6221 17.2711 72.6578 17.2711C73.1933 17.2711 73.586 17.225 73.8358 17.1328C74.0857 17.0405 74.2553 16.8652 74.3445 16.6069C74.4338 16.3301 74.4784 15.9149 74.4784 15.3614V6.89185C74.4784 6.33829 74.4338 5.93234 74.3445 5.67401C74.2553 5.41568 74.0857 5.24039 73.8358 5.14813C73.586 5.03742 73.1933 4.98206 72.6578 4.98206C72.6221 4.98206 72.6043 4.9267 72.6043 4.81599C72.6043 4.70528 72.6221 4.64992 72.6578 4.64992H82.1354C82.3139 4.64992 82.4031 4.72373 82.4031 4.87135L82.4299 6.58739C82.4478 6.93798 82.4567 7.38083 82.4567 7.91594C82.4567 7.9713 82.4032 7.99897 82.2961 7.99897C82.2068 7.99897 82.1533 7.9713 82.1354 7.91594C81.9034 7.0856 81.4661 6.39364 80.8235 5.84008C80.181 5.28652 79.4938 5.00974 78.762 5.00974H78.3872C77.9231 5.00974 77.5751 5.06509 77.3431 5.17581C77.1289 5.26807 76.9772 5.44336 76.8879 5.70169C76.8165 5.96002 76.7809 6.36597 76.7809 6.91953V10.6838C78.2623 10.6468 79.3243 10.5915 79.9668 10.5177C80.6094 10.4254 80.9753 10.3793 81.0645 10.3793C81.1181 10.3793 81.1537 10.4439 81.1716 10.573C81.2073 10.7022 81.2251 10.8406 81.2251 10.9882C81.2251 11.1543 81.2073 11.3111 81.1716 11.4587C81.1537 11.6064 81.1181 11.6802 81.0645 11.6802C80.9753 11.6802 80.6094 11.634 79.9668 11.5418C79.3243 11.4311 78.2623 11.3573 76.7809 11.3203V15.2506C76.7809 15.7857 76.8165 16.1917 76.8879 16.4685C76.9772 16.7268 77.1289 16.9113 77.3431 17.022C77.5751 17.1143 77.9231 17.1604 78.3872 17.1604H79.003C79.8062 17.1604 80.5737 16.856 81.3055 16.2471C82.0373 15.6381 82.5727 14.8631 82.9118 13.9221Z"
        fill="#4D1199"
      />
      <path
        d="M89.655 15.2506C89.655 15.7488 89.6997 16.1271 89.7889 16.3854C89.896 16.6438 90.0745 16.8283 90.3244 16.939C90.5921 17.0313 90.9848 17.0774 91.5024 17.0774H92.3056C93.2872 17.0774 94.1529 16.7453 94.9025 16.081C95.6522 15.4167 96.1876 14.5218 96.5089 13.3962C96.5268 13.3593 96.5803 13.3501 96.6695 13.3685C96.7766 13.3685 96.8302 13.387 96.8302 13.4239C96.7052 14.3834 96.6428 15.6381 96.6428 17.1881C96.6428 17.3357 96.6071 17.4464 96.5357 17.5202C96.4821 17.5756 96.384 17.6033 96.2412 17.6033H85.6123C85.5766 17.6033 85.5588 17.5479 85.5588 17.4372C85.5588 17.3265 85.5766 17.2711 85.6123 17.2711C86.1121 17.2711 86.478 17.225 86.71 17.1328C86.9421 17.0405 87.0938 16.8652 87.1652 16.6069C87.2544 16.3301 87.299 15.9149 87.299 15.3614V6.89185C87.299 6.33829 87.2544 5.93234 87.1652 5.67401C87.0938 5.41568 86.9421 5.24039 86.71 5.14813C86.478 5.03742 86.1121 4.98206 85.6123 4.98206C85.5766 4.98206 85.5588 4.9267 85.5588 4.81599C85.5588 4.70528 85.5766 4.64992 85.6123 4.64992L86.8974 4.6776C87.6114 4.71451 88.1647 4.73296 88.5574 4.73296C89.0214 4.73296 89.6104 4.71451 90.3244 4.6776L91.5291 4.64992C91.5827 4.64992 91.6095 4.70528 91.6095 4.81599C91.6095 4.9267 91.5827 4.98206 91.5291 4.98206C90.9758 4.98206 90.5653 5.03742 90.2976 5.14813C90.0477 5.24039 89.8782 5.42491 89.7889 5.70169C89.6997 5.96002 89.655 6.36597 89.655 6.91953V15.2506Z"
        fill="#4D1199"
      />
      <path
        d="M119.137 17.2711C119.173 17.2711 119.191 17.3265 119.191 17.4372C119.191 17.5479 119.173 17.6033 119.137 17.6033H115.684C115.237 17.6033 114.586 17.2988 113.729 16.6899C112.605 17.5202 111.266 17.9354 109.713 17.9354C108.392 17.9354 107.384 17.6586 106.688 17.1051C106.01 16.5331 105.67 15.8503 105.67 15.0569C105.67 14.3557 105.902 13.7376 106.367 13.2025C106.831 12.6489 107.509 12.04 108.401 11.3757C108.009 10.8221 107.705 10.3147 107.491 9.85341C107.17 9.11532 107.009 8.44182 107.009 7.83291C107.009 7.13173 107.197 6.52281 107.571 6.00615C107.946 5.47104 108.437 5.05587 109.044 4.76064C109.669 4.4654 110.32 4.31779 110.998 4.31779C111.73 4.31779 112.382 4.48385 112.953 4.81599C113.542 5.12968 113.836 5.67401 113.836 6.449C113.836 6.94721 113.711 7.39006 113.461 7.77755C113.229 8.14659 112.935 8.47873 112.578 8.77396C112.239 9.05074 111.757 9.40133 111.132 9.82573L110.49 10.2409C111.311 11.551 112.453 12.8611 113.916 14.1712L114.666 14.8078C115.059 14.0697 115.255 13.3039 115.255 12.5105C115.255 11.8831 115.103 11.4034 114.8 11.0712C114.514 10.7207 114.104 10.5454 113.568 10.5454C113.515 10.5454 113.479 10.49 113.461 10.3793C113.461 10.2686 113.497 10.2132 113.568 10.2132L118.495 10.1855C118.566 10.1855 118.602 10.2409 118.602 10.3516C118.602 10.4623 118.566 10.5177 118.495 10.5177C118.031 10.5177 117.683 10.573 117.451 10.6838C117.236 10.7945 117.085 10.9421 116.995 11.1266C116.924 11.2927 116.817 11.5971 116.674 12.04C116.335 13.2025 115.826 14.2635 115.148 15.223C115.987 15.8503 116.763 16.3393 117.477 16.6899C118.191 17.0405 118.745 17.2342 119.137 17.2711ZM109.124 6.47668C109.124 7.43619 109.508 8.58022 110.275 9.90876C110.775 9.44746 111.159 8.97693 111.427 8.49718C111.712 8.01743 111.855 7.49154 111.855 6.91953C111.855 6.31061 111.703 5.8124 111.4 5.42491C111.114 5.03742 110.748 4.84367 110.302 4.84367C109.945 4.84367 109.66 4.98206 109.445 5.25884C109.231 5.53562 109.124 5.94157 109.124 6.47668ZM111.132 16.9944C111.935 16.9944 112.658 16.7822 113.301 16.3578C112.747 15.9334 112.194 15.4628 111.641 14.9462C110.409 13.7837 109.428 12.7227 108.696 11.7632C108.16 12.4459 107.893 13.184 107.893 13.9774C107.893 14.9185 108.196 15.6566 108.803 16.1917C109.428 16.7268 110.204 16.9944 111.132 16.9944Z"
        fill="#4D1199"
      />
      <path
        d="M131.996 15.2506C131.996 15.7488 132.031 16.1087 132.103 16.3301C132.192 16.5515 132.352 16.6991 132.585 16.7729C132.817 16.8467 133.191 16.8836 133.709 16.8836H135.315C136.583 16.8836 137.654 16.5238 138.528 15.8042C139.403 15.0661 139.983 14.0789 140.268 12.8426C140.286 12.7873 140.34 12.7688 140.429 12.7873C140.518 12.7873 140.563 12.815 140.563 12.8703C140.402 14.6048 140.322 16.0441 140.322 17.1881C140.322 17.3357 140.295 17.4464 140.242 17.5202C140.188 17.5756 140.081 17.6033 139.92 17.6033H127.391C127.355 17.6033 127.337 17.5479 127.337 17.4372C127.337 17.3265 127.355 17.2711 127.391 17.2711C127.997 17.2711 128.435 17.225 128.702 17.1328C128.988 17.0405 129.175 16.8652 129.265 16.6069C129.372 16.3301 129.425 15.9149 129.425 15.3614V2.54639C129.425 1.99282 129.372 1.58688 129.265 1.32855C129.175 1.07022 128.988 0.894925 128.702 0.802665C128.417 0.691953 127.98 0.636597 127.391 0.636597C127.355 0.636597 127.337 0.581241 127.337 0.470528C127.337 0.359816 127.355 0.30446 127.391 0.30446L128.756 0.332138C129.541 0.369042 130.184 0.387493 130.684 0.387493C131.219 0.387493 131.879 0.369042 132.665 0.332138L134.003 0.30446C134.057 0.30446 134.084 0.359816 134.084 0.470528C134.084 0.581241 134.057 0.636597 134.003 0.636597C133.414 0.636597 132.977 0.691953 132.692 0.802665C132.424 0.894925 132.236 1.07945 132.129 1.35623C132.04 1.61456 131.996 2.0205 131.996 2.57406V15.2506Z"
        fill="#4D1199"
      />
      <path
        d="M154.03 7.69452C154.03 6.71656 153.86 6.0246 153.521 5.61866C153.182 5.19426 152.611 4.98206 151.808 4.98206C151.754 4.98206 151.728 4.9267 151.728 4.81599C151.728 4.70528 151.754 4.64992 151.808 4.64992L152.906 4.6776C153.477 4.71451 153.95 4.73296 154.325 4.73296C154.61 4.73296 155.021 4.71451 155.556 4.6776L156.627 4.64992C156.663 4.64992 156.681 4.70528 156.681 4.81599C156.681 4.9267 156.663 4.98206 156.627 4.98206C155.913 4.98206 155.404 5.19426 155.101 5.61866C154.798 6.0246 154.646 6.71656 154.646 7.69452V12.5105C154.646 14.2266 154.182 15.5643 153.254 16.5238C152.343 17.4833 151.112 17.9631 149.559 17.9631C148.559 17.9631 147.64 17.7601 146.801 17.3542C145.962 16.9298 145.293 16.3301 144.793 15.5551C144.294 14.7801 144.044 13.8575 144.044 12.7873V6.89185C144.044 6.33829 143.999 5.93234 143.91 5.67401C143.821 5.41568 143.651 5.24039 143.401 5.14813C143.169 5.03742 142.785 4.98206 142.25 4.98206C142.196 4.98206 142.17 4.9267 142.17 4.81599C142.17 4.70528 142.196 4.64992 142.25 4.64992L143.508 4.6776C144.187 4.71451 144.74 4.73296 145.168 4.73296C145.632 4.73296 146.221 4.71451 146.935 4.6776L148.167 4.64992C148.202 4.64992 148.22 4.70528 148.22 4.81599C148.22 4.9267 148.202 4.98206 148.167 4.98206C147.631 4.98206 147.239 5.03742 146.989 5.14813C146.739 5.25884 146.56 5.45259 146.453 5.72937C146.364 5.9877 146.319 6.39364 146.319 6.94721V12.0677C146.319 13.7283 146.685 14.9554 147.417 15.7488C148.149 16.5238 149.104 16.9113 150.282 16.9113C151.442 16.9113 152.352 16.5423 153.013 15.8042C153.691 15.0477 154.03 13.9682 154.03 12.5659V7.69452Z"
        fill="#4D1199"
      />
      <path
        d="M171.669 17.2711C171.741 17.2711 171.776 17.3265 171.776 17.4372C171.776 17.5479 171.741 17.6033 171.669 17.6033C171.312 17.6033 170.759 17.5848 170.009 17.5479C169.26 17.511 168.724 17.4926 168.403 17.4926C168.118 17.4926 167.671 17.511 167.064 17.5479C166.493 17.5848 166.092 17.6033 165.86 17.6033C165.788 17.6033 165.753 17.5479 165.753 17.4372C165.753 17.3265 165.788 17.2711 165.86 17.2711C166.288 17.2711 166.591 17.2158 166.77 17.1051C166.966 16.9944 167.064 16.8191 167.064 16.5792C167.064 16.3209 166.931 15.8872 166.663 15.2783L164.976 11.5418H161.656L160.585 14.1989C160.282 14.9739 160.13 15.5643 160.13 15.9703C160.13 16.4316 160.282 16.7637 160.585 16.9667C160.907 17.1697 161.389 17.2711 162.031 17.2711C162.12 17.2711 162.165 17.3265 162.165 17.4372C162.165 17.5479 162.12 17.6033 162.031 17.6033C161.781 17.6033 161.424 17.5848 160.96 17.5479C160.46 17.511 159.996 17.4926 159.568 17.4926C159.122 17.4926 158.595 17.511 157.988 17.5479C157.453 17.5848 157.016 17.6033 156.677 17.6033C156.587 17.6033 156.543 17.5479 156.543 17.4372C156.543 17.3265 156.587 17.2711 156.677 17.2711C157.23 17.2711 157.676 17.1881 158.015 17.022C158.354 16.856 158.667 16.5515 158.952 16.1087C159.238 15.6474 159.577 14.9277 159.97 13.9498L163.932 4.23475C163.968 4.16094 164.021 4.12404 164.093 4.12404C164.164 4.12404 164.209 4.16094 164.227 4.23475L168.537 13.8114C168.983 14.8078 169.349 15.5459 169.635 16.0256C169.938 16.5054 170.233 16.8375 170.518 17.022C170.822 17.1881 171.205 17.2711 171.669 17.2711ZM161.897 10.9052H164.682L163.209 7.63916L161.897 10.9052Z"
        fill="#4D1199"
      />
      <path
        d="M186.893 4.64992C186.947 4.64992 186.974 4.70528 186.974 4.81599C186.974 4.9267 186.947 4.98206 186.893 4.98206C186.197 4.98206 185.689 5.23116 185.367 5.72937C185.046 6.20912 184.886 6.97488 184.886 8.02665V17.9077C184.886 17.9446 184.841 17.9723 184.752 17.9908C184.662 18.0092 184.6 18 184.564 17.9631L175.328 6.91953C175.292 6.88262 175.274 6.86417 175.274 6.86417V14.2542C175.274 15.306 175.426 16.0718 175.729 16.5515C176.05 17.0313 176.55 17.2711 177.229 17.2711C177.264 17.2711 177.282 17.3265 177.282 17.4372C177.282 17.5479 177.264 17.6033 177.229 17.6033C176.8 17.6033 176.47 17.5941 176.238 17.5756L175.033 17.5479L173.802 17.5756C173.552 17.5941 173.204 17.6033 172.757 17.6033C172.722 17.6033 172.704 17.5479 172.704 17.4372C172.704 17.3265 172.722 17.2711 172.757 17.2711C173.454 17.2711 173.953 17.0313 174.257 16.5515C174.578 16.0718 174.739 15.306 174.739 14.2542V6.25525C174.292 5.79395 173.9 5.47104 173.561 5.28652C173.239 5.08355 172.918 4.98206 172.597 4.98206C172.561 4.98206 172.543 4.9267 172.543 4.81599C172.543 4.70528 172.561 4.64992 172.597 4.64992L174.096 4.6776C174.257 4.6776 174.453 4.6776 174.685 4.6776C174.935 4.65915 175.444 4.64992 176.211 4.64992C176.354 4.64992 176.479 4.69605 176.586 4.78831C176.693 4.88057 176.836 5.06509 177.014 5.34188L177.577 6.08919L184.35 14.1712V8.02665C184.35 6.95643 184.198 6.18145 183.895 5.70169C183.592 5.22194 183.101 4.98206 182.422 4.98206C182.369 4.98206 182.342 4.9267 182.342 4.81599C182.342 4.70528 182.369 4.64992 182.422 4.64992L183.413 4.6776C183.913 4.71451 184.314 4.73296 184.618 4.73296C184.921 4.73296 185.341 4.71451 185.876 4.6776L186.893 4.64992Z"
        fill="#4D1199"
      />
      <path
        d="M202.593 4.64992C202.647 4.64992 202.674 4.70528 202.674 4.81599C202.674 4.9267 202.647 4.98206 202.593 4.98206C201.897 4.98206 201.389 5.23116 201.067 5.72937C200.746 6.20912 200.585 6.97488 200.585 8.02665V17.9077C200.585 17.9446 200.541 17.9723 200.451 17.9908C200.362 18.0092 200.3 18 200.264 17.9631L191.027 6.91953C190.992 6.88262 190.974 6.86417 190.974 6.86417V14.2542C190.974 15.306 191.126 16.0718 191.429 16.5515C191.75 17.0313 192.25 17.2711 192.928 17.2711C192.964 17.2711 192.982 17.3265 192.982 17.4372C192.982 17.5479 192.964 17.6033 192.928 17.6033C192.5 17.6033 192.17 17.5941 191.938 17.5756L190.733 17.5479L189.501 17.5756C189.251 17.5941 188.903 17.6033 188.457 17.6033C188.422 17.6033 188.404 17.5479 188.404 17.4372C188.404 17.3265 188.422 17.2711 188.457 17.2711C189.153 17.2711 189.653 17.0313 189.956 16.5515C190.278 16.0718 190.438 15.306 190.438 14.2542V6.25525C189.992 5.79395 189.6 5.47104 189.26 5.28652C188.939 5.08355 188.618 4.98206 188.297 4.98206C188.261 4.98206 188.243 4.9267 188.243 4.81599C188.243 4.70528 188.261 4.64992 188.297 4.64992L189.796 4.6776C189.956 4.6776 190.153 4.6776 190.385 4.6776C190.635 4.65915 191.143 4.64992 191.911 4.64992C192.054 4.64992 192.179 4.69605 192.286 4.78831C192.393 4.88057 192.536 5.06509 192.714 5.34188L193.276 6.08919L200.05 14.1712V8.02665C200.05 6.95643 199.898 6.18145 199.595 5.70169C199.291 5.22194 198.8 4.98206 198.122 4.98206C198.069 4.98206 198.042 4.9267 198.042 4.81599C198.042 4.70528 198.069 4.64992 198.122 4.64992L199.113 4.6776C199.613 4.71451 200.014 4.73296 200.318 4.73296C200.621 4.73296 201.04 4.71451 201.576 4.6776L202.593 4.64992Z"
        fill="#4D1199"
      />
      <path
        d="M214.706 13.9221C214.723 13.8667 214.777 13.8391 214.866 13.8391C214.955 13.8391 215 13.8667 215 13.9221C214.875 15.2506 214.813 16.3393 214.813 17.1881C214.813 17.3357 214.786 17.4464 214.732 17.5202C214.679 17.5756 214.572 17.6033 214.411 17.6033H204.451C204.416 17.6033 204.398 17.5479 204.398 17.4372C204.398 17.3265 204.416 17.2711 204.451 17.2711C204.987 17.2711 205.38 17.225 205.629 17.1328C205.879 17.0405 206.049 16.8652 206.138 16.6069C206.227 16.3301 206.272 15.9149 206.272 15.3614V6.89185C206.272 6.33829 206.227 5.93234 206.138 5.67401C206.049 5.41568 205.879 5.24039 205.629 5.14813C205.38 5.03742 204.987 4.98206 204.451 4.98206C204.416 4.98206 204.398 4.9267 204.398 4.81599C204.398 4.70528 204.416 4.64992 204.451 4.64992H213.929C214.108 4.64992 214.197 4.72373 214.197 4.87135L214.224 6.58739C214.241 6.93798 214.25 7.38083 214.25 7.91594C214.25 7.9713 214.197 7.99897 214.09 7.99897C214 7.99897 213.947 7.9713 213.929 7.91594C213.697 7.0856 213.26 6.39364 212.617 5.84008C211.975 5.28652 211.288 5.00974 210.556 5.00974H210.181C209.717 5.00974 209.369 5.06509 209.137 5.17581C208.923 5.26807 208.771 5.44336 208.682 5.70169C208.61 5.96002 208.575 6.36597 208.575 6.91953V10.6838C210.056 10.6468 211.118 10.5915 211.76 10.5177C212.403 10.4254 212.769 10.3793 212.858 10.3793C212.912 10.3793 212.947 10.4439 212.965 10.573C213.001 10.7022 213.019 10.8406 213.019 10.9882C213.019 11.1543 213.001 11.3111 212.965 11.4587C212.947 11.6064 212.912 11.6802 212.858 11.6802C212.769 11.6802 212.403 11.634 211.76 11.5418C211.118 11.4311 210.056 11.3573 208.575 11.3203V15.2506C208.575 15.7857 208.61 16.1917 208.682 16.4685C208.771 16.7268 208.923 16.9113 209.137 17.022C209.369 17.1143 209.717 17.1604 210.181 17.1604H210.797C211.6 17.1604 212.367 16.856 213.099 16.2471C213.831 15.6381 214.366 14.8631 214.706 13.9221Z"
        fill="#4D1199"
      />
    </svg>
)

export default Logo