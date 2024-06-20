<script lang="ts">
  import * as Form from "$lib/components/ui/form";
  import { Input } from "$lib/components/ui/input";
  import { formSchema, type FormSchema } from "./schema";
  import {
    type SuperValidated,
    type Infer,
    superForm,
  } from "sveltekit-superforms";
  import { zodClient } from "sveltekit-superforms/adapters";
 
  export let data: SuperValidated<Infer<FormSchema>>;
 
  const form = superForm(data, {
    validators: zodClient(formSchema),
  });
 
  const { form: formData, enhance } = form;
</script>
 
<form method="POST" use:enhance>
  <Form.Field {form} name="phone1" >
    <Form.Control let:attrs>
      <Form.Label>電話番号</Form.Label>
      <Input {...attrs} bind:value={$formData.phone1} />
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Field {form} name="phone2" >
    <Form.Control let:attrs>
      <Input {...attrs} bind:value={$formData.phone2} />
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Field {form} name="phone3" >
    <Form.Control let:attrs>
      <Input {...attrs} bind:value={$formData.phone3} />
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Button>回答</Form.Button>
 
</form>