// should infer routes from the current url
import { getRoutes } from "../helpers/getRoutes.ts"

const getRoutesFromCurrentUrl = () => {
  const routes = getRoutes("/domain1/id1/domain2/id2", "", "home")
  return [
    {
      text: "home",
      href: "/",
    },
    {
      text: "domain1",
      href: "/domain1",
    },
    {
      text: "id1",
      href: "/domain1/id1",
    },
    {
      text: "domain2",
      href: "/domain1/id1/domain2",
    },
    {
      text: "id2",
      href: "/domain1/id1/domain2/id2",
    },
  ]
}

const shouldHandleHomePath = () => {
  const routes = getRoutes('/', '', 'home');
  return [{
    text: 'home',
    href: '/',
  }]
}

const shouldHandleQuerystring = () => {
  const routes = getRoutes(
    '/domain1/id1/domain2/id2',
    '?searchParam1=value1&searchParam2=value2',
    'home'
  );
  return [
    {
      text: 'home',
      href: '/?searchParam1=value1&searchParam2=value2',
    },
    {
      text: 'domain1',
      href: '/domain1?searchParam1=value1&searchParam2=value2',
    },
    {
      text: 'id1',
      href: '/domain1/id1?searchParam1=value1&searchParam2=value2',
    },
    {
      text: 'domain2',
      href: '/domain1/id1/domain2?searchParam1=value1&searchParam2=value2',
    },
    {
      text: 'id2',
      href: '/domain1/id1/domain2/id2?searchParam1=value1&searchParam2=value2',
    },
  ]
}

const shouldHandlePathWithQueryString = () => {
  const routes = getRoutes('/', '?searchParam1=value1&searchParam2=value2', 'home')
  return [
    {
      text: 'home',
      href: '/?searchParam1=value1&searchParam2=value2',
    },
  ]
}

const handleUnmatchedAsHash = () => {
  const availableRoutes: any[] = [
    {
      path: '/',
    },
    {
      path: '/domain1/:domain1Id',
    },
    {
      path: '/domain1/:domain1Id/domain2/:domain2Id',
    },
  ];

  const routes = getRoutes('/domain1/id1/domain2/id2', '', 'home', availableRoutes);

  return [
    {
      text: 'home',
      href: '/',
    },
    {
      text: 'domain1',
      href: '#',
    },
    {
      text: 'id1',
      href: '/domain1/id1',
    },
    {
      text: 'domain2',
      href: '#',
    },
    {
      text: 'id2',
      href: '/domain1/id1/domain2/id2',
    },
  ]
}

const renderUnmatchedAsHash = () => {
  const availableRoutes = [
    {
      path: '/',
    },
    {
      path: '/domain1/:domain1Id',
    },
    {
      path: '/domain1/:domain1Id/domain2/:domain2Id',
    },
  ];

  const routes = getRoutes(
    '/domain1/id1/domain2/id2',
    '?query=value',
    'home',
    availableRoutes.map((x) => x.path)
  );

  return [
    {
      text: 'home',
      href: '/?query=value',
    },
    {
      text: 'domain1',
      href: '#',
    },
    {
      text: 'id1',
      href: '/domain1/id1?query=value',
    },
    {
      text: 'domain2',
      href: '#',
    },
    {
      text: 'id2',
      href: '/domain1/id1/domain2/id2?query=value',
    },
  ]

}
