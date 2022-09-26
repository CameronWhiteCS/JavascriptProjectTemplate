export const get = (req, res, next) => {
    return res.send('GET');
}

export const create = (req, res, next) => {
    return res.send('POST');
}

export const update = (req, res, next) => {
    const id = req.params.id;
    return res.send('PUT');
}

export const remove = (req, res, next) => {
    const id = req.params.id;
    return res.send('DELETE');
}