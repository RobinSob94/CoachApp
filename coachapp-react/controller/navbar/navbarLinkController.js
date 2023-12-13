import { useRouter } from 'next/router'

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function useNavbarLinkController() {
    const pathName = usePathname();
    const { asPath } = useRouter();
    const [actualPath, setActualPath] = useState('');

    useEffect(() => {
        setActualPath(asPath.split('#')[0].split('?')[0]);
    }, [pathName]);
    return {
        actualPath
    }
}