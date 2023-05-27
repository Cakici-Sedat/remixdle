import { ActionArgs, V2_MetaFunction, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Login" }];
};

export async function action({ request }: ActionArgs) {
  const body = await request.formData();
  const userName = body.get('Username')
  const password = body.get('Password')
  console.log(userName)
  console.log(password)
  // const todo = await fakeCreateTodo({
  //   title: body.get("title"),
  // });
  // Login was Successfull
  const success = true
  if(success){

    return redirect(`/`);
  }
}


export default function Index() {
  return (
    <div className="m-auto bg-w">
        <div>
        <Form method="post" >
          <input type="text" name="Username" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 text-slate-500" placeholder="Username" />
          <input type="password" name="Password" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 text-slate-500" placeholder="Password" />
          <button className="block w-full mt-1 rounded-xl text-trextrex bg-blue-400 hover:bg-blue-800 focus:bg-blue-800 focus:bg-opacity-50">Enter</button>
        </Form>
        </div>
    </div>
  );
}
