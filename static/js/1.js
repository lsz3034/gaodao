//
function getQueryParamByName(name) {
    // 获取当前页面的URL
    let currentUrl = new URL(window.location.href);
    // 使用URLSearchParams来查找特定的GET参数
    let params = new URLSearchParams(currentUrl.search);
    // 检查参数是否存在且不为空
    if (params.has(name) && params.get(name).length > 0) {
        return params.get(name);
    } else {
        // 如果参数为空或不存在，返回null
        return "";
    }
}

function formatString(template, ...args) {
    return template.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != 'undefined'
            ? args[number]
            : match
            ;
    });
}
