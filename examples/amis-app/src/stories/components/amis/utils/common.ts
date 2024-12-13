
export const arrayGet = (array, key, def = null) => {
    try {
        if (key === null) {
            return array
        }

        if (array[key] !== undefined) {
            return array[key]
        }

        for (const segment of key.split('.')) {
            if (array[segment] !== undefined) {
                array = array[segment]
            } else {
                return def
            }
        }
    } catch (e) {
        return def
    }

    return array
}


export const mergeObject = (target, source) => {
    for (const key in source) {
        if (source.hasOwnProperty(key)) {
            const sourceVal = source[key]
            const targetVal = target[key]

            if (sourceVal === null) continue

            if (isObject(sourceVal) && isObject(targetVal)) {
                target[key] = mergeObject(targetVal, sourceVal)
            } else {
                target[key] = sourceVal
            }
        }
    }

    return target
}

export const isArray = (val): boolean => Object.prototype.toString.call(val) === '[object Array]'

export const isObject = (val): boolean => Object.prototype.toString.call(val) === '[object Object]'

export const isString = (val): boolean => Object.prototype.toString.call(val) === '[object String]'

export const isSSR = (function () {
    try {
        return !(typeof window !== 'undefined' && document !== undefined)
    } catch (e) {
        return true
    }
})()



export const msgHandler = (msg, handle) => {
    if(!msg?.length){
        return
    }

    const msgKey = 'owl-msg-' + msg

    if (localStorage.getItem(msgKey)) {
        return
    }

    localStorage.setItem(msgKey, msg)

    setTimeout(() => {
        localStorage.removeItem(msgKey)
    }, 5000)

    try {
        handle().then(() => {
            localStorage.removeItem(msgKey)
        })
    } catch (e) {
        localStorage.removeItem(msgKey)
    }
}


