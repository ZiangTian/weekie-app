import requests
import json
from datetime import datetime
import re

def get_access_token():
    url = "https://aip.baidubce.com/oauth/2.0/token?client_id=hiDp7c7DVuosgjuLVci7R7q0&client_secret=4sZlvwcPiATCd5ExVh3DeZ48UYkUWeZS&grant_type=client_credentials"

    payload = json.dumps("")
    headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

    response = requests.request("POST", url, headers=headers, data=payload)

    return response.json().get("access_token")


def test(user_input):

    user_input = f"现在是{datetime.now().strftime('%Y-%m-%d %H:%M')}。" + user_input
    access_token = get_access_token()
    url = "https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/ernie-func-8k?access_token=" + access_token
    payload = json.dumps({
        "messages": [
            {
                "role": "user",
                "content": "接下来的所有对话中，你可以使用外部的工具来回答问题。\n你必须按照规定的格式来使用工具，当你使用工具时，我会在下一轮对话给你工具调用结果，然后你应该根据实际结果判断是否需要进一步使用工具，或给出你的回答。\n工具可能有多个，每个工具由名称、描述、参数组成，参数符合标准的json schema。\n\n下面是工具列表:\n名称：add_task\n描述：添加一个日程\n参数：{\"type\":\"object\",\"properties\":{\"title\":{\"type\":\"string\",\"description\":\"任务的标题\"},\"startTime\":{\"type\":\"string\",\"description\":\"任务开始时间，精确到分钟\"},\"endTime\":{\"type\":\"string\",\"description\":\"任务结束时间，精确到分钟\"},\"deadline\":{\"type\":\"string\",\"description\":\"任务的截止日期\"},\"Importance\":{\"type\":\"boolean\",\"description\":\"任务的重要性，布尔值表示\"},\"Urgency\":{\"type\":\"boolean\",\"description\":\"任务的紧急性，布尔值表示\"},\"tag\":{\"type\":\"string\",\"description\":\"任务标签，用于分类\"},\"desc\":{\"type\":\"string\",\"description\":\"任务的描述，根据用户描述日程的特征生成\"},\"taskID\":{\"type\":\"string\",\"description\":\"任务的唯一标识符，由后端生成\"}},\"required\":[\"title\",\"startTime\",\"endTime\",\"deadline\",\"Importance\",\"Urgency\",\"tag\",\"desc\",\"taskID\"]}\n\n\n你的输出必须按照如下格式，只包含2行，不需要输出任何解释或其他无关内容:\nAction: 使用的工具名称\nAction Input: 使用工具的参数，json格式\n你的问题：" + user_input
            }

        ]
    })
    headers = {
        'Content-Type': 'application/json'
    }

    response = requests.request("POST", url, headers=headers, data=payload)
    result = response.json()
    result = result['result']
    match = re.search(r"Action Input: (.*)", result)
    if match:
        result = match.group(1)
        result_dict = json.loads(result)
        return result_dict
    else:
        print("Oops, something went wrong.")
        return None


if __name__ == '__main__':
    test("我明天要给母亲在海底捞火锅庆生，这是她70大寿")
